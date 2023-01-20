import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface ProductsResponse {
    products: any[]
}

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductsResponse, void>({
            query: () => `products`,
        }),
    })
})


export const { useGetProductsQuery } = api