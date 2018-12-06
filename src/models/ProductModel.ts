import { IContentCategory } from './ContentCategory';

export interface IProductModel {
    id: number,
    name: string,
    slug: string,
    productType: string,
    body: string,
    image: string,
    AppContentCategories?: Array<IContentCategory>,
    createdAt: Date,
    updatedAt: Date
}    
  
export namespace ProductFiltes {
    export enum Filter {
        SHOW_ALL = 'all',
        SHOW_ACTIVE = 'active'
    }
}