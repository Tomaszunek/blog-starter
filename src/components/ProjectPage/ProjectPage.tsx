import * as React from 'react';
import './projectPage.scss';
import { IArticleModel } from 'src/models';
import { match } from 'react-router';
import BreadcrumbsTemplate from '../template/breadcrumbs/breadcrumbs';
import FullScreenCont from '../template/fullScreenCont/fullSreenCont';

export default class ProjectPageComp extends React.Component<IProjectPageProps, any> {
    constructor(props: any) {
        super(props);       
    }

    public render() {
        return (
            <main>
                <FullScreenCont>        
                    <img className="headerImage" src="../images/backgroundMainPages/news.jpg" alt=""/>
                </FullScreenCont>
                <BreadcrumbsTemplate match={this.props.match}/>
            </main>
        );
    }
}

interface IProjectPageProps {
    projects: Array<IArticleModel>,
    match: match<void>
}