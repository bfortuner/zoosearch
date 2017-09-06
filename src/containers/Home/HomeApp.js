import React, {Component} from 'react'
import {
  Button, Container, Grid, Header, Icon, 
  Image, Item, Label, Menu, Segment, 
  Step, Table, Input, Dropdown, Link
} from 'semantic-ui-react'
import Fuse from 'fuse.js';
import FuzzySearch from 'react-fuzzy'
import {SEARCH_DATA} from '../../search_data.js'


const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    // marginTop: '2em',
    padding: '1em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

const FILTER_OPTIONS = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'models', text: 'Models', value: 'models' },
  { key: 'datasets', text: 'Datasets', value: 'datasets' },
  // { key: 'frameworks', text: 'Frameworks', value: 'frameworks' },
]

const SEARCH_KEYS = [
  "title",
  "type",
  "pretrained",
  "architecture",
  "framework",
  "dataset",
  "classes",
  "problem_types",
]

const SEARCH_OPTIONS = {
  shouldSort: true,
  includeScore: true,
  threshold: 0.4,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: SEARCH_KEYS
};

var INDEX = SEARCH_DATA;


class HomeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
        searchResult: [],

    };

    this.fuse = new Fuse(INDEX, SEARCH_OPTIONS);
    this.onChange = this.onChange.bind(this);
  }

  bind() {
    this.bound = {
        // onClickOut    : this.onClickOut.bind(this),
        // onFocus       : this.onFocus.bind(this),
        // onBlur        : this.onBlur.bind(this),
        onChange: this.onChange.bind(this),
        search: this.search.bind(this),
        // onKeyPress    : this.onKeyPress.bind(this),
        // onKeyDown     : this.onKeyDown.bind(this),
        // onKeyUp       : this.onKeyUp.bind(this),
        // toggle        : this.toggle.bind(this)
    };
  }

  onChange(e) {
    let query = e.target.value;

    if (!query) {
      query = '';
    }

    this.setState({
      searchResult: this.fuse.search(query)
    });
  }

  render() {
    return (
      <div>
        <Header
          as='h1'
          content='ZooSearch'
          style={style.h1}
          textAlign='center'
        />

        <Header
          as='h3'
          textAlign='center'
          style={style.h3}
          content='Search for machine learning models and datasets'
        />
        <Container>
          <Input 
          action={<Dropdown button options={FILTER_OPTIONS} defaultValue='all' />}
          actionPosition='left'
          fluid icon='search' 
          placeholder='Pytorch Resnet34 or Medical Segmentation...' 
          size='huge' 
          onChange={this.onChange}
          />

                    {/* onKeyPress={this.bound.onKeyPress} 
          className={this.classes.search}  */}

        {/* https://react.semantic-ui.com/elements/segment */}
          
          <Item.Group divided >
            {this.state.searchResult.map(function(data, i){
              return (
                <Item key={i}>
                <Item.Content>
                  <Item.Header as='a'>
                  {data.item.website_url != null ? (
                    <a href={data.item.website_url}>{data.item.title}</a>
                    ) : (
                      <span>{data.item.title}</span>
                  )}
                  </Item.Header>
                  
                  <a href={data.item.download_url}>
                  <Button primary floated='right'>
                    Download
                    <Icon name='right chevron' />
                    
                    </Button></a>
                  <Item.Meta>
                  {data.item.type}
                  </Item.Meta>
                  
                  {data.item.description != null &&
                    <Item.Description>
                      {data.item.description}
                    </Item.Description>}
                  
                  <Item.Extra>
                    {/* {data.item.paper_url != null &&
                    <a href={data.item.paper_url}>
                    <Button floated='left' primary>
                      Paper
                    </Button></a>} */}

                    {data.item.framework != null &&
                    <Label>{data.item.framework}</Label>}
                    {data.item.architecture != null &&
                    <Label>{data.item.architecture}</Label>}
                    {data.item.dataset != null &&
                    <Label>{data.item.dataset}</Label>}
                  </Item.Extra>

                  <Item.Extra>

                  </Item.Extra>
                </Item.Content>
                </Item>
              )
            })}
          </Item.Group>
        </Container>
      </div>
    );
  }
}

export default HomeApp