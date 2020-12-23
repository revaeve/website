export interface FiltersDataModel<D> {
  heading: string,
  data: D[]
}

export interface RateFilterData {
  stars: number,
  value: string,
  info: string
}

export interface ListBoxFilterData {
  name: string
}
