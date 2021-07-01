export interface FilterI {
    searchBy: FilterBy;
    value: string;
}

export enum FilterBy { 
    name,
    glass,
    ingredient,
    category,
} 