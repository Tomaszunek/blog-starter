import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ProjectsActions } from '../actions';
import { ArticleFiltes } from '../models';
import { IRootState, RootState } from '../reducers';
import { omit } from '../utils';
import ProjectPageComp from '../components/ProjectPage/ProjectPage';

const FILTER_VALUES = (Object.keys(ArticleFiltes.Filter) as 
  (keyof typeof ArticleFiltes.Filter)[]).map(
  (key) => ArticleFiltes.Filter[key]
);


export namespace ProjectPage {
  export interface IProps extends RouteComponentProps<void> {
    projects: RootState.ProjectsState;
    actions: ProjectsActions;
    filter: ArticleFiltes.Filter;
  }
}

@connect(
  (state: IRootState, ownProps): Pick<ProjectPage.IProps, 'projects' | 'filter'> => {
    const hash = ownProps.location && ownProps.location.hash.replace('#', '');
    const filter = FILTER_VALUES.find((value) => value === hash) || ArticleFiltes.Filter.SHOW_ALL;
    return { projects: state.projects, filter };
  },  
  (dispatch: Dispatch): Pick<ProjectPage.IProps, 'actions'> => ({
    actions: bindActionCreators(omit(ProjectsActions, 'Type'), dispatch)
  })
)

export default class ProjectPage extends React.Component<ProjectPage.IProps> {    
  public render() {
    const { projects } = this.props;
    return (
      <ProjectPageComp projects={projects} match={this.props.match}/>
    );
  }
}


