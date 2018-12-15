import * as React from 'react';
import './projectTile.scss';
import { IArticleModel } from '../../../models';

export default class ProjectTile extends React.Component<IProjectTileProps, any> {
    constructor(props: any) {
        super(props);       
    }

    public render() {
        const { name } = this.props.article;
        return (
            <div className="projectTile">
                {name}
            </div>
        );
    }
}

interface IProjectTileProps {
    article: IArticleModel
}