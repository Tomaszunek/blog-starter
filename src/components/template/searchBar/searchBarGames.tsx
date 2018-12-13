import * as React from 'react';
import './searchBar.scss'

export default class SearchBarGames extends React.Component<ISearchBarProps, ISearchBarState> {
  constructor(props: any) {
    super(props)    
  }

  public render() {
    const { searchType } = this.props;    
    return (
      <div className="searchBar">{ searchType }</div>
    );
  }

}

interface ISearchBarState {
  photoIndex: number
}

interface ISearchBarProps {
    searchType: "article" | "product",
    articleType: "" | "article" | "product"
}