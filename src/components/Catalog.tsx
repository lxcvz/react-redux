import { useEffect, useState } from 'react'
import api from '../services/api'
import { IProduct } from '../store/modules/cart/types'
import { CatalogItem } from './CatalogItem'

export function Catalog() {
    const [catalog, setCatalog] = useState<IProduct[]>([])

    useEffect(() => {
        api.get('products').then(response => {
            setCatalog(response.data)
        })
    }, [])

    return (
        <div>
            <h1>catalogo</h1>
            {catalog.map(product => (
                <CatalogItem key={product.id} product={product} />
            ))}
        </div>
    )
}