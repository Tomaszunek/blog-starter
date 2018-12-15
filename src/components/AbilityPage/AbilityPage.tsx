import * as React from 'react';
import './abilityPage.scss';
import { IArticleModel } from 'src/models';
import { match } from 'react-router';
import BreadcrumbsTemplate from '../template/breadcrumbs/breadcrumbs';
import FullScreenCont from '../template/fullScreenCont/fullSreenCont';
import ProjectContainer from '../ProjectPage/projectContainer/ProjectContainer';

export default class AbilityPageComp extends React.Component<IAbilityPageProps, any> {
    constructor(props: any) {
        super(props);       
    }

    public render() {
        const { abilities } = this.props;
        return (
            <main>
                <FullScreenCont>        
                    <img className="headerImage" src="../images/backgroundMainPages/news.jpg" alt=""/>
                </FullScreenCont>
                <BreadcrumbsTemplate match={this.props.match}/>
                <ProjectContainer content={abilities}/>
            </main>
        );
    }
}

interface IAbilityPageProps {
    abilities: Array<IArticleModel>,
    match: match<void>
}
