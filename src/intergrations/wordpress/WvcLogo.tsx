import { useEffect, useRef, useState } from 'react';

interface WvcLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

interface LogoState {
  svgContent: string | null;
  imgUrl: string | null;
}

function processSvgMarkup(raw: string): string {
  // Only generated logos (a single fill color) are recolored to the theme via
  // currentColor. A user-supplied brand SVG with multiple fill colors keeps its
  // original colors untouched.
  const distinctFills = new Set(
    (raw.match(/\bfill="([^"]*)"/gi) ?? [])
      .map((m) => m.replace(/\bfill="([^"]*)"/i, '$1').trim().toLowerCase())
      .filter((c) => c && c !== 'none' && c !== 'currentcolor'),
  );
  const isMonochrome = distinctFills.size <= 1;
  // Strip hardcoded width/height/style from root <svg> so the component
  // controls sizing, then inject height:100%;width:auto so it fills its container.
  let svg = raw;
  if (isMonochrome) {
    svg = svg.replace(/\bfill="[^"]*"/g, 'fill="currentColor"');
  }
  svg = svg.replace(/<svg\b([^>]*)>/i, (_, attrs) => {
    const cleaned = attrs.replace(/\s+(?:width|height|style)="[^"]*"/g, '');
    return `<svg${cleaned} style="height:100%;width:auto;display:block">`;
  });
  return svg;
}

async function fetchLogoData(url: string): Promise<LogoState> {
  // Only SVG needs fetching (to inline it for theme recoloring). Everything else
  // renders as a plain <img>, which loads cross-origin without a CORS preflight.
  // We must NOT rely on a fixed raster allow-list: WordPress transcodes large
  // uploads to avif/webp (e.g. logo-scaled.avif), and fetch()-ing those from a
  // different origin (the editor preview) is CORS-blocked. So treat anything that
  // is not an .svg URL as an image and render it directly.
  if (!/\.svg(\?|#|$)/i.test(url)) {
    return { svgContent: null, imgUrl: url };
  }
  try {
    const res = await fetch(url);
    if (!res.ok) return { svgContent: null, imgUrl: url };
    const contentType = res.headers.get('Content-Type') ?? '';
    if (contentType.includes('image/svg+xml')) {
      return { svgContent: processSvgMarkup(await res.text()), imgUrl: null };
    }
    return { svgContent: null, imgUrl: url };
  } catch {
    // SVG fetch failed (e.g. cross-origin CORS in the editor preview) — fall back
    // to rendering the URL as a plain <img> rather than showing no logo at all.
    return { svgContent: null, imgUrl: url };
  }
}

export function WvcLogo({ className = 'h-10 w-auto', style }: WvcLogoProps) {
  const [logo, setLogo] = useState<LogoState>({ svgContent: null, imgUrl: null });
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof wvcClient?.getLogo !== 'function') return;

    const applyLogoMeta = (meta: { url: string; svg_content?: string | null } | null) => {
      if (!meta) return;
      // svg_content is pre-loaded by the theme (PHP reads the file server-side),
      // so no cross-origin fetch is needed and CORS cannot block it.
      if (meta.svg_content) {
        setLogo({ svgContent: processSvgMarkup(meta.svg_content), imgUrl: null });
      } else if (meta.url) {
        fetchLogoData(meta.url).then(setLogo);
      }
    };

    // Fetch logo on mount — getLogo() returns cached data instantly on first load,
    // falls back to REST if not pre-loaded
    wvcClient.getLogo().then(applyLogoMeta);

    // Re-fetch when WordPress updates the logo
    const handleRefresh = () => {
      wvcClient?.getLogo?.(true)?.then(applyLogoMeta);
    };
    //if (typeof window === 'undefined') return

    window.addEventListener('WVC_LOGO_REFRESH', handleRefresh);
    return () => window.removeEventListener('WVC_LOGO_REFRESH', handleRefresh);
  }, []);

  // Uploaded SVGs often ship with an oversized/padded viewBox (e.g. a full
  // artboard around a small centered logo). Since we don't control the source
  // file, tighten the viewBox to the rendered content's real bounds once it's
  // in the DOM, so the logo fills its box instead of floating small inside
  // empty canvas space. Re-runs on every svgContent change (including after
  // WVC_LOGO_REFRESH) so a newly uploaded logo is also refit.
  useEffect(() => {
    if (!logo.svgContent) return;
    const svgEl = wrapperRef.current?.querySelector('svg');
    if (!svgEl) return;

    const fitViewBox = () => {
      try {
        const bbox = svgEl.getBBox();
        if (bbox.width > 0 && bbox.height > 0) {
          const pad = Math.max(bbox.width, bbox.height) * 0.02;
          svgEl.setAttribute(
            'viewBox',
            `${bbox.x - pad} ${bbox.y - pad} ${bbox.width + pad * 2} ${bbox.height + pad * 2}`,
          );
        }
      } catch {
        // getBBox() throws if the SVG isn't laid out (display:none ancestor, etc.)
      }
    };

    const raf = requestAnimationFrame(fitViewBox);
    return () => cancelAnimationFrame(raf);
  }, [logo.svgContent]);

  if (logo.svgContent) {
    return (
      <span
        ref={wrapperRef}
        className={className}
        style={{ display: 'inline-block', ...style }}
        data-wvc-role="logo"
      >
        <span
          style={{ color: 'var(--color-logo)', display: 'block', height: '100%' }}
          dangerouslySetInnerHTML={{ __html: logo.svgContent }}
        />
      </span>
    );
  }

  if (logo.imgUrl) {
    return (
      <span className={className} style={{ display: 'inline-block', ...style }} data-wvc-role="logo">
        <img
          src={logo.imgUrl}
          alt="Logo"
          style={{ display: 'block', height: '100%', width: 'auto' }}
        />
      </span>
    );
  }

  return null;
}
