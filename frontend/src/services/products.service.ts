import { Product } from '../types';
import { api, USE_MOCKS } from './api';
import { MOCK_PRODUCTS } from '../mocks';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const productsService = {
    async getAll(): Promise<Product[]> {
        if (USE_MOCKS) {
            await delay(300);
            return MOCK_PRODUCTS.filter(p => p.isActive);
        }
        return api.get<Product[]>('/products');
    },

    async getById(id: string): Promise<Product | undefined> {
        if (USE_MOCKS) {
            await delay(200);
            return MOCK_PRODUCTS.find(p => p.id === id);
        }
        return api.get<Product>(`/products/${id}`);
    },

    async getByCategory(category: string): Promise<Product[]> {
        if (USE_MOCKS) {
            await delay(300);
            return MOCK_PRODUCTS.filter(p => p.category === category && p.isActive);
        }
        return api.get<Product[]>('/products', { category });
    }
};
