import type { Product } from '../types/product';

const BASE_URL = "https://fakestoreapi.com";

export async function getAllProducts(): Promise<Product[]>{
    const response= await fetch(`${BASE_URL}/products`);

    if (!response.ok) throw new Error("Errore nel recupero della lista prodotti");

    return response.json()
    
}

export async function getProduct(id:number): Promise<Product> {
    const response= await fetch(`${BASE_URL}/products/${id}`);

    let data: unknown;
    try {
        data = await response.json();
    } catch {
        data = null;
    }

    if (!response.ok) throw new Error("Errore nel recupero del prodotto");
    
    if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
        throw new Error("Prodotto non trovato");
    }

    return data as Product;
}