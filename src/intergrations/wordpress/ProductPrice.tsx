import React, { useEffect, useLayoutEffect, useState } from "react";

import { cn } from "../../lib/utils";
import type { EcommerceProduct, EcommerceProductVariation } from "./types";
import { formatProductPrice, getProductPriceHtml, isVariableProduct } from "./ecommerceProductUtils";
import {
	isVariableParentPriceSuppressed,
	subscribeVariableParentPriceSuppressed,
} from "./variableProductPriceGate";

export interface ProductPriceProps extends React.HTMLAttributes<HTMLElement> {
	product: EcommerceProduct | EcommerceProductVariation;
	as?: "span" | "p" | "div";
}

export const ProductPrice: React.FC<ProductPriceProps> = ({
	product,
	as: Component = "span",
	className,
	...props
}) => {
	const [parentPriceSuppressed, setParentPriceSuppressed] = useState(() =>
		isVariableParentPriceSuppressed(product.id)
	);

	useLayoutEffect(() => {
		const sync = () => setParentPriceSuppressed(isVariableParentPriceSuppressed(product.id));
		sync();
		return subscribeVariableParentPriceSuppressed(sync);
	}, [product.id]);

	// Single product pages mount VariableProductAddToCart, which suppresses the
	// parent range so only the selected variation price is shown.
	if (isVariableProduct(product) && parentPriceSuppressed) {
		return null;
	}

	const priceHtml = getProductPriceHtml(product);
	if (priceHtml) {
		return (
			<Component
				className={cn("product-price", className)}
				dangerouslySetInnerHTML={{ __html: priceHtml }}
				{...props}
			/>
		);
	}

	const currentPrice =
		product.formatted_discounted_price ?? product.formatted_price ?? formatProductPrice(product);
	if (!currentPrice) {
		return null;
	}

	if (product.on_sale && product.formatted_price) {
		return (
			<Component className={cn("product-price flex items-baseline gap-2", className)} {...props}>
				<span className="text-muted-foreground line-through">{product.formatted_price}</span>
				<span>{currentPrice}</span>
			</Component>
		);
	}

	return (
		<Component className={cn("product-price", className)} {...props}>
			{currentPrice}
		</Component>
	);
};
