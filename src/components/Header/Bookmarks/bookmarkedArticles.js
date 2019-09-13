/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../../../assets/scss/components/article/homePage.scss';
import Layout from '../../Layout/Layout';
import books from '../../../assets/images/BookmarkCover.png';
import SingleArticle from '../../article/singleArticle';
import fetchImage from '../../article/fetchImage';
import PaginationComponent from './paginationBookmark';
import { getDataThunkPrivate, postDataThunkPrivate } from '../../../redux/thunks/index';
import { deletebookmarkAction } from '../../../redux/actions/user/BookmarkAction';

export class Home extends Component {
  handleDelete = async (id) => {
    await this.props.postDataThunkPrivate('delete', `/bookmarks/${id}`, deletebookmarkAction, null);
    (toast.success('Article removed from bookmark'), setTimeout(() => window.location.reload(), 6000));
  }

  render() {
    return (
      <Layout>
        <div className='header-image'>
          <img src={books} />
        </div>
        <main role='main'>
          <div className='album py-5 bg-light home-page-container'>
            <div className='container'>
              <div className='row'>
                {this.props.articles.length > 0 && this.props.articles.map((article) => <Link
                  key={article.articleId}
                  to={`/readArticle/${article.articleId}`}
                  className='col-md-3'>
                  <SingleArticle
                    title={article.article.title}
                    readTime={article.article.readtime}
                    image={fetchImage(article.article.body)}
                    author={article.article.author.username}
                    id={article.articleId}
                    page='Bookmark'
                    onClick={() => { this.handleDelete(article.id); }}
                  />
                </Link>)}
              </div>
              <div className="row pagination center-align">
                <PaginationComponent />
              </div>
              <div className="clear" />
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

Home.propTypes = {
  getDataThunk: PropTypes.func,
  postDataThunkPrivate: PropTypes.func,
  articles: PropTypes.array,
};

export const mapStateToProps = (state) => ({
  articles: state.bookmark.bookmarks,
});

const actionCreator = {
  getDataThunkPrivate,
  postDataThunkPrivate,
};

export default connect(mapStateToProps, actionCreator)(Home);
