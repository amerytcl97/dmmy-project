export const API_URL = "https://dummyjson.com";
export const API_GET_PRODUCTS = `${API_URL}/products`;
export const API_GET_SEARCHED_PRODUCTS = (searchQuery: string) => `${API_GET_PRODUCTS}/search?q=${searchQuery}`;
export const API_GET_CATEGORIES = `${API_GET_PRODUCTS}/categories`;
export const API_GET_PRODUCTS_BY_CATEGORY = (categoryName: string) => `${API_GET_PRODUCTS}/category/${categoryName}`;
