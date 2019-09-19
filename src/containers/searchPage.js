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
import PaginationButtons from '../components/article/paginationButtons';

export class SearchPage extends Component {
  state = {
    search: {
      authorName: '',
      keyword: '',
      tag: '',
      title: 'a',
    },
    searchData: [],
    articlePerPage: 10,
    currentPage: 1,
  };

  componentDidMount = async () => {
    await this.props.getDataThunk(
      'get',
      `article/search?title=${this.state.search.title}`,
      searchAction,
    );
    this.setState({ ...this.state, searchData: this.props.searchData, search: { ...this.state.search, title: '' } });
  }

  handleOnChange = (e) => {
    const search = { ...this.state.search };
    search[e.target.name] = e.target.value;
    this.setState({ search });
  }


  handleKeyPress = async (e) => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      await this.props.getDataThunk(
        'get',
        `article/search?title=${this.state.search.title}`,
        searchAction,
      );
      this.setState({ ...this.state, searchData: this.props.searchData });
      document.getElementById('mainSearch').value = '';
    }
  }

  handleOnSubmit = () => async (e) => {
    e.preventDefault();
    const {
      authorName, keyword, tag, title,
    } = this.state.search;
    // eslint-disable-next-line no-unused-expressions
    const titleUrl = title && `title=${this.state.search.title}`;
    const tagUrl = tag && `tag=${tag}`;
    const authorNameUrl = authorName && `authorName=${authorName}`;
    const keywordUrl = keyword && `keyword=${keyword}`;
    const mainUrl = `article/search?${titleUrl}&${authorNameUrl}&${tagUrl}&${keywordUrl}`;

    await this.props.getDataThunk(
      'get',
      `${mainUrl}`,
      searchAction,
    );
    this.setState({ ...this.state, searchData: this.props.searchData });
    document.getElementById('searchForm').reset();
    // eslint-disable-next-line no-unused-expressions
    this.props.errors
    && toast.error('No Articles found!');
  }

  handleView = (id) => () => {
    this.props.history.push(`/readArticle/${id}`);
  }

  next = () => {
    this.setState({
      ...this.state,
      currentPage: this.state.currentPage + 1,
    });
  };

  previous = () => {
    this.setState({
      ...this.state,
      currentPage: this.state.currentPage - 1,
    });
  };

  render() {
    const { currentPage, articlePerPage } = this.state;
    const indexOfLastArticle = currentPage * articlePerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlePerPage;
    const currentArticles = this.state.searchData ? this.state.searchData.slice(
      indexOfFirstArticle,
      indexOfLastArticle,
    ) : [];
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
                        articles={currentArticles && currentArticles}
                        fetchImage={fetchImage}
                        handleView={this.handleView}
                        handleOnSubmit={this.handleOnSubmit}
                      />
                      <PaginationButtons
                        next={this.next}
                        previous={this.previous}
                        currentPage={currentPage}
                        dataLength={this.state.searchData ? this.state.searchData.length : 0}
                        indexOfLastArticle={indexOfLastArticle}
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
