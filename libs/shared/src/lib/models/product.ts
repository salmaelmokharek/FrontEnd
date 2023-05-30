import { Category } from "./category";

export interface Product {
  _id?: string,
  title: {
    type: string;
    required: true;
    minlength: 4;
  };
  description?: string;
  content?: string;
  brand?: string;
  countStock?: {
    type: number;
    default: 0;
  };
  price?: number;
  thumbnail?: string;
  images?: string[];
  rating?: {
    type: number;
    enum: [0, 1, 2, 3, 4, 5];
    default: 0;
  };
  isFeatured?: {
    type: boolean;
    default: false;
  };
  created_at?: {
    type: Date;
  };
  updated_at?: {
    type: Date;
  };
  category?: Category['_id'] ;
}
export interface ResProduct {
  success?: boolean,
  myProducts: Product[]
}
export interface ResOneProduct {
  success?: boolean,
  product: Product[]
}

