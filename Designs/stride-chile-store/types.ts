export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  category: string;
  badge?: "NEW" | "LIMITED" | "BEST SELLER";
  description?: string;
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
