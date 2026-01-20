// ============================================
// PRODUCT TYPES - Consolidado de store
// ============================================

export type ProductCategory = 'camisetas' | 'poleras' | 'hoodies' | 'pantalones' | 'accesorios';
export type ProductBadge = 'NEW' | 'LIMITED' | 'BEST SELLER' | 'SALE';

export interface ProductColor {
    name: string;
    hex: string;
}

export interface Product {
    id: string;
    name: string;
    subtitle?: string;
    description?: string;
    price: number;
    originalPrice?: number;
    image: string;
    images?: string[];
    category: ProductCategory;
    badge?: ProductBadge;
    sizes?: string[];
    colors?: ProductColor[];
    stock: number;
    isActive: boolean;
}

export interface CartItem extends Product {
    quantity: number;
    selectedSize?: string;
    selectedColor?: string;
}

export interface CartState {
    items: CartItem[];
    isOpen: boolean;
    total: number;
}

export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface Address {
    street: string;
    number: string;
    apartment?: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
}

export interface Order {
    id: string;
    userId: string;
    items: CartItem[];
    subtotal: number;
    shipping: number;
    total: number;
    status: OrderStatus;
    shippingAddress: Address;
    paymentMethod: string;
    createdAt: string;
    updatedAt: string;
}
