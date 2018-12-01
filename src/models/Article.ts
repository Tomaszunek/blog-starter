

export interface IArticle {
    id: number,
    name: string,
    body: string
}
    
  
export namespace ArticleFiltes {
    export enum Filter {
        SHOW_ALL = 'all',
        SHOW_ACTIVE = 'active',
        SHOW_COMPLETED = 'completed'
    }
}