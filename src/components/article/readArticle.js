/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactHtmlParser from 'react-html-parser';
import Layout from '../Layout/Layout';
import { getDataThunk, postDataThunkPrivate } from '../../redux/thunks/index';
import {
  likeArticleAction,
  dislikeArticleAction,
  getArticleLikesAction,
  getArticleDislikesAction,
  clearLikesOrDislikes,
} from '../../redux/actions/likeDislikeAction';
import getArticlesAction from '../../redux/actions/getArticlesAction';
import '../../assets/scss/components/article/readArticle.scss';
import '../../assets/scss/components/article/sharingArticle.scss';
import facebookIcon from '../../assets/images/facebookIcon.png';
import gmail from '../../assets/images/gmail.png';
import twitter from '../../assets/images/twitter.png';
import LikeDislike from './likeDislikeArticle';


export class ReadArticle extends Component {
  state = {
    username: '',
    title: '',
    body: '',
    likes: 0,
    dislikes: 0,
  }

componentDidMount = async () => {
  const { id } = this.props.match.params;
  await this.props.getDataThunk('get', `articles/${id}`, getArticlesAction);
  const { title, body } = this.props.articles;
  const { username } = this.props.articles.author;
  this.setState({
    username,
    title,
    body,
  });
  await this.props.getDataThunk('get', `articles/${id}/likes`, getArticleLikesAction);
  await this.props.getDataThunk('get', `articles/${id}/dislikes`, getArticleDislikesAction);
  this.setState({ username: this.props.articles.author.username });
}


handleLike = async () => {
  const { id } = this.props.match.params;
  if (localStorage.getItem('id') === null) {
    toast.error('Login first to like or dislike this article!');
  } else { await this.props.postDataThunkPrivate('post', `articles/${id}/like`, likeArticleAction, null); }
  await this.props.getDataThunk('get', `articles/${id}/likes`, getArticleLikesAction);
  await this.props.getDataThunk('get', `articles/${id}/dislikes`, getArticleDislikesAction);
}

componentWillReceiveProps = (nextProps) => {
  const { dislikes, likes } = nextProps;
  this.setState((prevState) => ({
    ...prevState,
    likes: likes || prevState.likes,
    dislikes: dislikes || prevState.dislikes,
  }));
}

handleDislike = async () => {
  const { id } = this.props.match.params;
  if (localStorage.getItem('id') === null) {
    toast.error('Login first to like or dislike this article!');
  } else { await this.props.postDataThunkPrivate('post', `articles/${id}/dislike`, dislikeArticleAction, null); }
  await this.props.getDataThunk('get', `articles/${id}/dislikes`, getArticleDislikesAction);
  await this.props.getDataThunk('get', `articles/${id}/likes`, getArticleLikesAction);
}

componentWillUnmount = () => {
  this.props.clearLikesOrDislikes();
}

render() {
  const { likes, dislikes } = this.props;
  const { title, body, username } = this.state;
  const { id } = this.props.match.params;
  const url = `https://ah-jawans-frontend.herokuapp.com/readArticle/${id}`;
  const tweet = `'${this.state.title}' -by ${this.state.username} @ https://ah-jawans-frontend.herokuapp.com/readArticle/${id}`;

  return (
    <Layout>
    <div className = 'read-article-body'>
    <ToastContainer position={toast.POSITION.TOP_RIGHT} />
      <div className='container read-article-container'>
          <h2 className='article-text title'>{title}</h2>
          <br/>
          <p className='article-text'>{ReactHtmlParser(body)}{ body && <div className='vote'><LikeDislike
              handleLike={this.handleLike}
              handleDislike={this.handleDislike}
              likes={likes}
              dislikes={dislikes}/></div>}</p>
          <br/>
          <p className='author-name'>{ username && `By ${username}`}</p>
        </div>
        {body && <div className='sharing-icons'>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
            <img className="" src={facebookIcon} alt="facebook"/>
          </a>
          <a href={`https://twitter.com/intent/tweet?text=${tweet}`}>
            <img className="" src={twitter} alt="twitter"/>
          </a>
          <a href={`mailto:?subject=${title}&body="${title}" by ${username} @ ${url}`}>
            <img className="" src={gmail} alt="gmail"/>
          </a>
        </div> }
    </div>
    </Layout>
  );
}
}

ReadArticle.propTypes = {
  getDataThunk: PropTypes.func,
  postDataThunkPrivate: PropTypes.func,
  articles: PropTypes.object,
  match: PropTypes.object,
  author: PropTypes.string,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  clearLikesOrDislikes: PropTypes.func,
};

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
  likes: state.likeDislikeReducer.likes.count,
  dislikes: state.likeDislikeReducer.dislikes.count,
});

const actionCreator = {
  getDataThunk, postDataThunkPrivate, clearLikesOrDislikes,
};

export default connect(mapStateToProps, actionCreator)(ReadArticle);
