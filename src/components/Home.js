/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/scss/components/article/homePage.scss';
import Layout from './Layout/Layout';
import books from '../assets/images/books.jpg';
import SingleArticle from './article/singleArticle';
import getArticlesAction from '../redux/actions/getArticlesAction';
import { getDataThunk } from '../redux/thunks/index';
import fetchImage from './article/fetchImage';

export class Home extends Component {
  componentDidMount = async () => {
    await this.props.getDataThunk('get', 'articles', getArticlesAction);
  }

  render() {
    return (
      <Layout>
        <div className='header-image'>
          <img src={ books }/>
        </div>
        <main role='main'>
          <div className='album py-5 bg-light home-page-container'>
            <div className='container'>
              <div className='row'>
                {this.props.articles.length > 0 && this.props.articles.map((article) => <Link
                key={article.id}
                to={`/readArticle/${article.id}`}
                className='col-md-3'>
                <SingleArticle
                  title={article.title}
                  readTime={article.readtime}
                  image={fetchImage(article.body)}
                  author={article.author.username}
                  id = {article.id}
                  />
                  </Link>)}
              </div>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

Home.propTypes = {
  getDataThunk: PropTypes.func,
  articles: PropTypes.array,
};

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
});

const actionCreator = {
  getDataThunk,
};

export default connect(mapStateToProps, actionCreator)(Home);
