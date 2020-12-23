export interface ApiCatalogPageModel{
  categoryId: number,
  sort: string,
  take: number,
  skip: number,
  brandIds?: number[],
  stars?: number[]
}
