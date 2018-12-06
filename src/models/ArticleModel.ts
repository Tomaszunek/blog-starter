import { IContentCategory } from './ContentCategory';

export interface IArticleModel {
    id: number,
    name: string,
    slug: string,
    type: string,
    articleType: string,
    body: string,
    image: string,
    AppContentCategories?: Array<IContentCategory>,
    createdAt: Date,
    updatedAt: Date
}    
  
export namespace ArticleFiltes {
    export enum Filter {
        SHOW_ALL = 'all',
        SHOW_ACTIVE = 'active',
        SHOW_COMPLETED = 'completed'
    }
}