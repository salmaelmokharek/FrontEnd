export interface Category {
  _id?: string,
  label?: string,
  icon?: string,
  color?: string
}
export interface ResCategory {
  success?: boolean,
  myCategories: Category[]
}
export interface ResOneCategory{
  success?: boolean,
  category: Category
}
