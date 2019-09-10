import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Layout from '../components/Layout/Layout';
import { getDataThunk } from '../redux/thunks/index';
import searchAction from '../redux/actions/searchAction';
import fetchImage from '../components/article/fetchImage';
import ArticleCard from '../components/article/searchArticlecard';
import ArticleSearchForm from '../components/article/articleSearchForm';

export class SearchPage extends Component {
  state = {
    search: {
      authorName: '',
      keyword: '',
      tag: '',
      title: 'a',
      offset: 0,
      limit: 10,
    },
    searchData: [],
  };

  componentDidMount = async () => {
    await this.props.getDataThunk(
      'get',
      `article/search?title=${this.state.search.title}&limit=${this.state.search.limit}&offset=${this.state.search.offset}`,
      searchAction,
    );
    this.setState({ ...this.state, searchData: this.props.searchData, search: { ...this.state.search, title: '' } });
    this.handelDispaly(this.props.counts, this.state.search.offset);
  }

  handleOnChange = (e) => {
    const search = { ...this.state.search };
    search[e.target.name] = e.target.value;
    this.setState({ search });
  }

  handelDispaly = (counts, offset) => {
    const modal = document.getElementsByClassName('btn-pagination')[0];
    const prev1 = document.getElementsByClassName('btn-pagination-prev1')[0];
    const next1 = document.getElementsByClassName('btn-pagination-next1')[0];

    if (this.props.counts <= 10) {
      modal.classList.remove('pagination');
      modal.classList.add('pagination-none');
    } else {
      modal.classList.remove('pagination-none');
      modal.classList.add('pagination');
    }

    if ((counts - offset) < 0) {
      next1.classList.remove('btn-pagination');
      next1.classList.add('pagination-none');
    } else {
      next1.classList.remove('pagination-none');
      next1.classList.add('btn-pagination');
    }
    if (offset <= 0) {
      prev1.classList.add('pagination-none');
    } else {
      prev1.classList.remove('pagination-none');
    }
  }

  handleKeyPress = async (e) => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      await this.props.getDataThunk(
        'get',
        `article/search?title=${this.state.search.title}&limit=${this.state.search.limit}&offset=${this.state.search.offset}`,
        searchAction,
      );
      this.setState({ ...this.state, searchData: this.props.searchData });
      this.handelDispaly(this.props.counts, this.state.search.offset);
      document.getElementById('mainSearch').value = '';
    }
  }

  handleOnSubmit = (limit, offsets) => async (e) => {
    e.preventDefault();
    const {
      authorName, keyword, tag, title,
    } = this.state.search;
    // eslint-disable-next-line no-unused-expressions
    this.setState({ ...this.state, search: { ...this.state.search, offset: offsets } });
    const titleUrl = title && `title=${this.state.search.title}`;
    const tagUrl = tag && `tag=${tag}`;
    const authorNameUrl = authorName && `authorName=${authorName}`;
    const keywordUrl = keyword && `keyword=${keyword}`;
    const mainUrl = `article/search?${titleUrl}&${authorNameUrl}&${tagUrl}&${keywordUrl}&limit=${this.state.search.limit}&offset=${this.state.search.offset}`;

    await this.props.getDataThunk(
      'get',
      `${mainUrl}`,
      searchAction,
    );
    this.setState({ ...this.state, searchData: this.props.searchData });

    this.handelDispaly(this.props.counts, this.state.search.offset);
    document.getElementById('searchForm').reset();
    // eslint-disable-next-line no-unused-expressions
    this.props.errors
    && toast.error('No Articles found!');
  }

  handleView = (id) => () => {
    this.props.history.push(`/readArticle/${id}`);
  }

  render() {
    const { offset, limit } = this.state.search;
    return (
        <Layout>
            <div className="searchContainer">
                <div className="searchContainer__mainsearch">
                  <input id="mainSearch" name="title" onChange={this.handleOnChange} onKeyPress={this.handleKeyPress} type="text" placeholder="Search" aria-label="Search" className="searchContainer__mainsearch_input"/>
                </div>
                <div className="searchContainer__articlesContainer">
                  <ArticleSearchForm
                    handleOnChange={this.handleOnChange}
                    handleOnSubmit={this.handleOnSubmit}
                  />
                    <div className="searchContainer__articlesContainer_articleContent ">
                      <ArticleCard
                        articles={this.state.searchData && this.state.searchData}
                        fetchImage={fetchImage}
                        handleView={this.handleView}
                        handleOnSubmit={this.handleOnSubmit}
                        limit={limit}
                        offset={offset}
                      />
                    </div>
                </div>

            </div>
        </Layout>
    );
  }
}

SearchPage.propTypes = {
  getDataThunk: PropTypes.func,
  searchData: PropTypes.array,
  errors: PropTypes.object,
  history: PropTypes.any,
  counts: PropTypes.number,
};

export const mapStateToProps = (state) => ({
  searchData: state.searchData.searchData.data,
  errors: state.searchData.errors,
  counts: state.searchData.searchData.counts,
});

const actionCreator = {
  getDataThunk,
};

export default connect(mapStateToProps, actionCreator)(SearchPage);
