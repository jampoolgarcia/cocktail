export interface FilterI {
    searchBy: FilterBy;
    value: string;
}

export enum FilterBy { 
    name = 'name',
    glass = 'glass',
    ingredient = 'ingredient',
    category = 'category',
} 