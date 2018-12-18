import * as React from 'react';
import './projectPage.scss';
import { IArticleModel } from 'src/models';
import { match } from 'react-router';
import BreadcrumbsTemplate from '../template/breadcrumbs/breadcrumbs';
import FullScreenCont from '../template/fullScreenCont/fullSreenCont';
import ProjectContainer from './projectContainer/ProjectContainer';

export default class ProjectPageComp extends React.Component<IProjectPageProps, any> {
    constructor(props: any) {
        super(props);       
    }

    public render() {
        const { projects } = this.props;
        return (
            <main>
                <FullScreenCont>        
                    <img className="headerImage" src="../images/backgroundMainPages/news.jpg" alt=""/>
                </FullScreenCont>
                <BreadcrumbsTemplate match={this.props.match}/>
                <ProjectContainer contentType="project" content={projects} />
            </main>
        );
    }
}

interface IProjectPageProps {
    projects: Array<IArticleModel>,
    match: match<void>
}