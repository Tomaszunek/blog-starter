export interface IProductModel {
    id: number,
    name: string,
    body: string,
    price: number
}    
  
export namespace ProductFiltes {
    export enum Filter {
        SHOW_ALL = 'all',
        SHOW_ACTIVE = 'active'
    }
}