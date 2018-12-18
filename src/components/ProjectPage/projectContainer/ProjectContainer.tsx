import * as React from 'react';
import './projectContainer.scss';
import { IArticleModel } from '../../../models';
import ProjectTile from '../projectTile/ProjectTile';

export default class ProjectContainer extends React.Component<IProjectContainerProps, any> {
    constructor(props: any) {
        super(props);       
    }

    public render() {
        const { addedClass } = this.props;
        const ProjectTiles = Object
            .entries(this.props.content)
            .map((cont) => cont[1])
            .map((item:IArticleModel, ind) => 
                <ProjectTile key={ind} article={item}/>
        );        
        return (
            <div className={ "projectContainer " + ( addedClass ? addedClass : "") }>
                {ProjectTiles}
            </div>
        );
    }
}

interface IProjectContainerProps {
    addedClass?: string,
    contentType: "ability" | "project"
    content: Array<IArticleModel>
}