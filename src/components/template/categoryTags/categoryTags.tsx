import * as React from 'react';
import './categoryTags.scss'
import { IContentCategory } from 'src/models/ContentCategory';

export default class CategoryTags extends React.Component<ICategoryTagProps, any> {
    constructor(props: any) {
        super(props)    
    }

    public render() {
        const { categories, articleType} = this.props;
        return (
            categories && categories.length ?
            (<div className={ "categoryTagsCont " + (articleType ? articleType : "") }>
                {categories ? categories.map(cat => {
                   return(<p className={cat.name} key={cat.id}>{"a"}</p>)
                }) : null}
            </div>) :
            null
        )
    }      
}
interface ICategoryTagProps {
    categories?: Array<IContentCategory>,
    articleType: string
}