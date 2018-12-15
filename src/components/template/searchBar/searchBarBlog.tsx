import * as React from 'react';
import './searchBar.scss'

export default class SearchBarBlog extends React.Component<ISearchBarProps, ISearchBarState> {
  constructor(props: any) {
    super(props)
    this.state = {
      selectedcontentTypes: [this.props.searchContentType]
    }    
  }

  public render() {
    const { searchContentType } = this.props;    
    return (
      <div className="searchBar">
        <form action="">
          { this.renderSelectType() }
          { this.renderCategories() }        
          <button>Find{searchContentType}</button>
        </form>
      </div>
    );
  }
  private renderSelectType = () => {
    const selectOptions:any = [];
    for (const item in SearchContentType) {
      if(SearchContentType[item]) {
          selectOptions.push(
          <option 
            key={item}
            // selected={(SearchContentType[item] === this.props.searchContentType) ? true : false}  
            value={item}>
            {SearchContentType[item]}
          </option>)
      } 
    }
    return (<select 
              // value={this.state.selectedcontentTypeId}
              defaultValue={["article"]}
              multiple={true}
              onChange={(e) => this.onContentTypeChange(e)} 
              className="contentType" 
              name="findType">
      { selectOptions.map((item:any) => item) }
    </select>)
  }

  private renderCategories = () => {
    return <div className="categoryCont">Categories</div>
  }
  private onContentTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { selectedcontentTypes} = this.state;
    selectedcontentTypes.push(e.target.value);
    this.setState({selectedcontentTypes});
  }
}

interface ISearchBarState {
  selectedcontentTypes: Array<string>
}

interface ISearchBarProps {
  searchContentType: SearchContentType
  articleType: AricleTypes
}

export enum SearchContentType {
  article= "article",
  product= "product",
}

export enum AricleTypes {
  "motivation", "technology"
}
