import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AbilitiesActions } from '../actions';
import { ArticleFiltes } from '../models';
import { IRootState, RootState } from '../reducers';
import { omit } from '../utils';
import '../App.scss';
import AbilityPageComp from '../components/AbilityPage/AbilityPage';

const FILTER_VALUES = (Object.keys(ArticleFiltes.Filter) as 
  (keyof typeof ArticleFiltes.Filter)[]).map(
  (key) => ArticleFiltes.Filter[key]
);


export namespace AbilityPage {
  export interface IProps extends RouteComponentProps<void> {
    abilities: RootState.AbilitiesState;
    actions: AbilitiesActions;
    filter: ArticleFiltes.Filter;
  }
}

@connect(
  (state: IRootState, ownProps): Pick<AbilityPage.IProps, 'abilities' | 'filter'> => {
    const hash = ownProps.location && ownProps.location.hash.replace('#', '');
    const filter = FILTER_VALUES.find((value) => value === hash) || ArticleFiltes.Filter.SHOW_ALL;
    return { abilities: state.abilities, filter };
  },  
  (dispatch: Dispatch): Pick<AbilityPage.IProps, 'actions'> => ({
    actions: bindActionCreators(omit(AbilitiesActions, 'Type'), dispatch)
  })
)

export default class AbilityPage extends React.Component<AbilityPage.IProps> {
  public componentDidMount() {
    this.fetchAbilitiesContent();
  }  
  public render() {
    const { abilities } = this.props;
    return (
      <AbilityPageComp abilities={abilities} match={this.props.match}/>
    );
  }
  public fetchAbilitiesContent = () => {    
    const { actions } = this.props;
    const url = "http://localhost:3002/api/contents/ability";
    return fetch(url)
    .then(res => res.json())
    .then(body => actions.fetchAbilitiesSucess(body))
    .catch(err => console.log(err))    
  }  
}


