import type { Product } from '../types/product';

const BASE_URL = "https://fakestoreapi.com";

export async function getAllCategories(): Promise<string[]> {
let response: Response;
try {
    response = await fetch(`${BASE_URL}/products/categories`);
} catch {
    throw new Error(
    "Impossibile contattare il server. Controlla la connessione, prova a disattivare eventuali estensioni del browser (ad blocker o simili), oppure apri il sito in una finestra in incognito."
    );
}

if (!response.ok) throw new Error("Errore nel recupero delle categorie");

return response.json();
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
let response: Response;
try {
    response = await fetch(`${BASE_URL}/products/category/${category}`);
} catch {
    throw new Error(
    "Impossibile contattare il server. Controlla la connessione, prova a disattivare eventuali estensioni del browser (ad blocker o simili), oppure apri il sito in una finestra in incognito."
    );
}

if (!response.ok) throw new Error("Errore nel recupero dei prodotti");

return response.json();
}

export async function getAllProducts(): Promise<Product[]> {
let response: Response;
try {
    response = await fetch(`${BASE_URL}/products`);
} catch {
    throw new Error(
    "Impossibile contattare il server. Controlla la connessione, prova a disattivare eventuali estensioni del browser (ad blocker o simili), oppure apri il sito in una finestra in incognito."
    );
}

if (!response.ok) throw new Error("Errore nel recupero della lista prodotti");

return response.json();
}

export async function getProduct(id: number): Promise<Product> {
let response: Response;
try {
    response = await fetch(`${BASE_URL}/products/${id}`);
} catch {
    throw new Error(
    "Impossibile contattare il server. Controlla la connessione, prova a disattivare eventuali estensioni del browser (ad blocker o simili), oppure apri il sito in una finestra in incognito."
    );
}

if (!response.ok) throw new Error("Errore nel recupero del prodotto");

let data: unknown;
try {
    data = await response.json();
} catch {
    data = null;
}

if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
    throw new Error("Prodotto non trovato");
}

return data as Product;
}