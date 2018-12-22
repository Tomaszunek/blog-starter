import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AbilitiesActions, AppSystemActions } from '../actions';
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
    systemActions: AppSystemActions;
    filter: ArticleFiltes.Filter;
  }
}

@connect(
  (state: IRootState, ownProps): Pick<AbilityPage.IProps, 'abilities' | 'filter'> => {
    const hash = ownProps.location && ownProps.location.hash.replace('#', '');
    const filter = FILTER_VALUES.find((value) => value === hash) || ArticleFiltes.Filter.SHOW_ALL;
    return { abilities: state.abilities, filter };
  },  
  (dispatch: Dispatch): Pick<AbilityPage.IProps, 'actions' | 'systemActions'> => ({
    actions: bindActionCreators(omit(AbilitiesActions, 'Type'), dispatch),
    systemActions: bindActionCreators(omit(AppSystemActions, 'Type'), dispatch),
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
    const { actions, systemActions } = this.props;
    const url = `${process.env.api_path}/contents/ability`;
    systemActions.loadingStart({loading: true})
    return fetch(url)
    .then(res => res.json())
    .then(body => {
      actions.fetchAbilitiesSucess(body)
      systemActions.loadingEnd({loading: false})
    })
    .catch(err => console.log(err))    
  }  
}


