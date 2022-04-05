import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/modules/cart/action";
import { IProduct } from "../store/modules/cart/types";

interface CatalogItemProps {
    product: IProduct
}

export function CatalogItem({ product }: CatalogItemProps) {
    const dispatch = useDispatch()

    const handleAddProductsToCart = useCallback(() => {
        dispatch(addProductToCart(product))
    }, [dispatch])

    return (
        <article>
            <strong>{product.title} - {product.price} </strong> {'   '}

            <button type="button" onClick={handleAddProductsToCart}>Comprar</button>
        </article>
    );
}