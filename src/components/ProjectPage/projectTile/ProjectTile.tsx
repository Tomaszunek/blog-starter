import * as React from 'react';
import './projectTile.scss';
import { IArticleModel } from '../../../models';
import CategoryTags from 'src/components/template/categoryTags/categoryTags';

export default class ProjectTile extends React.Component<IProjectTileProps, any> {
    constructor(props: any) {
        super(props);       
    }

    public render() {
        const { name, type, image, AppContentCategories, slug, articleType, createdAt } = this.props.article;
        const url = `${type}/${slug}`;
        return (
            <a className={"projectTile " + type} href={url}>
                <img src={"/images/projects/" +  image} alt=""/>
                <div>
                    <CategoryTags articleType={type} categories={AppContentCategories}/>
                    {name}
                </div>
                <table>
                    <td>Name: {name}</td>
                    <td>Type: {articleType}</td>
                    <td>Added: {createdAt}</td>
                </table>
            </a>
        );
    }
}

interface IProjectTileProps {
    article: IArticleModel
}