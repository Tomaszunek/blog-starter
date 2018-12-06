import * as React from 'react';
import './categoryTags.scss'
import { IContentCategory } from 'src/models/ContentCategory';

export default class CategoryTags extends React.Component<ICategoryTagProps, any> {
    constructor(props: any) {
        super(props)    
    }

    public render() {
        const { categories } = this.props;
        return (
            <div>
                {categories ? categories.map(cat => {
                   return(<div key={cat.id}>{cat.name}</div>)
                }) : null}
            </div>
        )
    }      
}
interface ICategoryTagProps {
    categories?: Array<IContentCategory>
}