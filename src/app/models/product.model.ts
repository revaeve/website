import {ProductSpecifications} from "./product-specifications.model";

export interface ProductModel {
  brandId: number;
  categoryId: number;
  description: string;
  id: number;
  name: string;
  imageUrls: [];
  mainImageUrl: string;
  stars?: number;
  specifications: ProductSpecifications[];
}

