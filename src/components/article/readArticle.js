/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import Layout from '../Layout/Layout';
import { getDataThunk } from '../../redux/thunks/index';
import getArticlesAction from '../../redux/actions/getArticlesAction';
import '../../assets/scss/components/article/readArticle.scss';

export class ReadArticle extends Component {
  state = {
    username: '',
  }

componentDidMount = async () => {
  const { id } = this.props.match.params;
  await this.props.getDataThunk('get', `articles/${id}`, getArticlesAction);
  this.setState({ username: this.props.articles.author.username });
}

render() {
  return (
          <Layout>
              <div className='container read-article-container'>
                <h2 className='article-text title'>{this.props.articles.title}</h2>
                <br/>
                <p className='article-text'>{ReactHtmlParser(this.props.articles.body)}</p>
                <br/>
                <p className='author-name'>{`By ${this.state.username}`}</p>
              </div>
          </Layout>
  );
}
}

ReadArticle.propTypes = {
  getDataThunk: PropTypes.func,
  articles: PropTypes.object,
  match: PropTypes.object,
  author: PropTypes.string,
};

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
});

const actionCreator = {
  getDataThunk,
};

export default connect(mapStateToProps, actionCreator)(ReadArticle);
