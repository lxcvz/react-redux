import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import api from '../services/api'
import { addProductToCart } from '../store/modules/cart/action'
import { IProduct } from '../store/modules/cart/types'

export function Catalog() {
    const dispatch = useDispatch()
    const [catalog, setCatalog] = useState<IProduct[]>([])

    useEffect(() => {
        api.get('products').then(response => {
            setCatalog(response.data)
        })
    }, [])

    const handleAddProductsToCart = useCallback((product: IProduct) => {
        dispatch(addProductToCart(product))
    }, [dispatch])

    return (
        <div>
            <h1>catalogo</h1>
            {catalog.map(product => (
                <article key={product.id}>
                    <strong>{product.title} - {product.price} </strong> {'   '}

                    <button type="button" onClick={() => handleAddProductsToCart(product)}>Comprar</button>
                </article>
            ))}
        </div>
    )
}