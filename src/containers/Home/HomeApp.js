import React, {Component} from 'react'
import {
  Button, Container, Grid, Header, Icon, 
  Image, Item, Label, Menu, Segment, 
  Step, Table, Input, Dropdown, Link
} from 'semantic-ui-react';
import Fuse from 'fuse.js';
import FuzzySearch from 'react-fuzzy';
import {SEARCH_DATA} from '../../search_data.js';
import {MODEL_DATA} from '../../models.js';
import {DATASET_DATA} from '../../datasets.js';
import * as c from '../../constants.js';


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
  "architecture",
  "frameworks.framework",
  "dataset",
  "class_labels",
  "topics",
  "problem_types",
]

const SEARCH_OPTIONS = {
  shouldSort: true,
  includeScore: true,
  tokenize: true,
  threshold: 0.4,
  location: 0,
  distance: 500,
  maxPatternLength: 32,
  minMatchCharLength: 3,
  keys: SEARCH_KEYS
};

var INDEX_LOOKUP = {
  'models': MODEL_DATA,
  'datasets': DATASET_DATA,
  'all': SEARCH_DATA
}

var INDEX = SEARCH_DATA;


class HomeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
        searchResult: [],
        fuse: new Fuse(SEARCH_DATA, SEARCH_OPTIONS)
    };
    this.modelCount = MODEL_DATA.length;
    this.datasetCount = DATASET_DATA.length;
    this.onChange = this.onChange.bind(this);
    this.changeIndex = this.changeIndex.bind(this);
  }

  changeIndex(e, data) {
    this.setState({
      fuse: new Fuse(INDEX_LOOKUP[data.value], SEARCH_OPTIONS)
    });
  }

  bind() {
    this.bound = {
        onChange: this.onChange.bind(this),
        search: this.search.bind(this),
    };
  }

  onChange(e) {
    let query = e.target.value;

    if (!query) {
      query = '';
    }

    this.setState({
      searchResult: this.state.fuse.search(query)
    });
  }

  render() {
    var slogan = "Search "+ this.modelCount + " machine learning models and " + this.datasetCount + " datasets";
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
          content={slogan}
        />
        <Container>
          <Input 
          action={<Dropdown button options={FILTER_OPTIONS} defaultValue='all' onChange={this.changeIndex}/>}
          actionPosition='left'
          fluid icon='search' 
          placeholder='Pytorch Resnet or Satellite image...' 
          size='huge' 
          onChange={this.onChange}
          />

        {/* https://react.semantic-ui.com/elements/segment */}
          
          <Item.Group divided >
            {this.state.searchResult.map(function(data, i){
              return (
                <Item key={i}>
                <Item.Content>

                  <Item.Header as='a'>
                    <span>{data.item.title}</span>
                  </Item.Header>
                  
                  {data.item.type === c.DATASET &&
                    <a href={data.item.website_url}>
                      <Button size='tiny' primary floated='right'>
                        Website
                      <Icon name='right chevron' />
                      </Button>
                    </a>}

                  {data.item.type === c.MODEL &&
                    <span>
                      {data.item.frameworks.map(item => 
                        <a key={item.framework} href={item.url}>
                          <Button size="tiny" primary floated='right'>
                            {item.framework}
                          </Button>
                        </a>
                      )}
                    </span>
                  }
                  
                  <Item.Meta>
                  {data.item.type === c.DATASET ? (
                    <span>{data.item.type}</span>
                    ) : (
                    <span>{data.item.architecture}</span>
                  )}
                  </Item.Meta>

                  
                    <Item.Description>
                    {data.item.description != null &&
                      data.item.description
                    }
                    
                    {data.item.paper_url != null &&
                    <span> &nbsp;
                      <a href={data.item.paper_url}>
                        [Paper]
                      </a>
                    </span>}
                    </Item.Description>
                  
 

                  <Item.Extra>
                    {data.item.dataset != null &&
                    <Label size='tiny'>{data.item.dataset}</Label>}
                    {data.item.topics.map(item => 
                      <Label size='tiny' key={item}>{item}</Label>
                    )}
                    {data.item.problem_types.map(item => 
                      <Label size='tiny' key={item}>{item}</Label>
                    )}
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