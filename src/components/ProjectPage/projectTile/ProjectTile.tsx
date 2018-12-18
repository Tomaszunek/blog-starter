import * as React from 'react';
import './projectTile.scss';
import { IArticleModel } from '../../../models';
import CategoryTags from '../../../components/template/categoryTags/categoryTags';

export default class ProjectTile extends React.Component<IProjectTileProps, any> {
    constructor(props: any) {
        super(props);       
    }

    public render() {
        const { name, body, type, image, AppContentCategories, slug, articleType, createdAt, updatedAt } = this.props.article;
        const url = `${type}/${slug}`;
        return (
            <a className={"projectTile " + type} href={(type === "project" ? url : undefined)}>
                <img src={"/images/projects/" +  image} alt=""/>
                <div className="categoryTile">
                    <CategoryTags articleType={type} categories={AppContentCategories}/>
                    <span>{name}</span>
                </div>
                {
                    (type === "project") ? (
                        <table>
                            <tbody>
                                <tr>                            
                                    <td>Type: {articleType}</td>
                                    <td>Added: {createdAt}</td>
                                    <td>Last Update: {updatedAt}</td>
                                </tr>
                            </tbody>
                        </table>
                    ) : (
                        <p>{body}</p>
                    )
                }
            </a>
        );
    }
}

interface IProjectTileProps {
    article: IArticleModel
}