export interface CategoriesModel {
  id: number;
  name: string;
  children?: CategoriesModel[];
}
