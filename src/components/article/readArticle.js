/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';
import ReactImageFallback from 'react-image-fallback';
import Layout from '../Layout/Layout';
import { getDataThunk, postDataThunkPrivate } from '../../redux/thunks/index';
import {
  likeArticleAction,
  dislikeArticleAction,
  getArticleLikesAction,
  getArticleDislikesAction,
  clearLikesOrDislikes,
} from '../../redux/actions/likeDislikeAction';
import {
  createCommentAction, getAllCommentsAction, deleteCommentAction, updateCommentAction,
} from '../../redux/actions/commentsActions/commentsActions';
import getArticlesAction from '../../redux/actions/getArticlesAction';
import { postbookmarkAction } from '../../redux/actions/user/BookmarkAction';
import '../../assets/scss/components/article/readArticle.scss';
import '../../assets/scss/components/article/sharingArticle.scss';
import facebookIcon from '../../assets/images/facebook-logo.png';
import gmail from '../../assets/images/share-on-email.jpg';
import twitter from '../../assets/images/twitter-logo.png';
import LikeDislike from './likeDislikeArticle';
import Bookmark from '../../assets/images/Bookmark.png';
import { CommentComponent } from '../comments/CommentComponent';
import remove from '../../assets/icons/delete.png';
import edit from '../../assets/icons/edit.png';
import profileImagePlaceHolder from '../../assets/images/profile_plaholder.png';
import LoadingGif from '../../assets/images/loadingGif.gif';
import Tags from './displayTags';

export class ReadArticle extends Component {
  state = {
    username: '',
    title: '',
    body: '',
    image: null,
    likes: 0,
    dislikes: 0,
    readers: 0,
    bookmark: '',
    errors: '',
    modal: 'none',
    comment: {
      body: '',
    },
  }

  handleClick = async () => {
    let articleId;
    if (localStorage.getItem('id') !== null) {
      articleId = localStorage.getItem('articleId');
      await this.props.postDataThunkPrivate('post', `bookmarks/${articleId}`, postbookmarkAction);
      this.setState({ errorsbookmark: this.props.errors, bookmark: this.props.bookmark });
      const { errorsbookmark, bookmark } = this.props;
      if (bookmark) { (toast.success(`${bookmark}!`), setTimeout(() => window.location.reload(), 6000)); } else {
        (toast.error(`${errorsbookmark}!`), setTimeout(() => window.location.reload(), 6000));
      }
    } else {
      toast.error('Please Login first to bookmark the article!');
    }
  };

  componentDidMount = async () => {
    const { id } = this.props.match.params;
    await this.props.getDataThunk('get', `articles/${id}`, getArticlesAction);
    const { title, body, readers } = this.props.articles;
    localStorage.setItem('articleId', this.props.articles.id);
    const { username, image } = this.props.articles.author;
    this.setState({
      username,
      title,
      body,
      image,
      readers,
    });
    await this.props.getDataThunk('get', `articles/${id}/likes`, getArticleLikesAction);
    await this.props.getDataThunk('get', `articles/${id}/dislikes`, getArticleDislikesAction);
    this.setState({ username: this.props.articles.author.username });
    await this.props.postDataThunkPrivate('get', `articles/${id}/comments`, getAllCommentsAction, null);
    await this.props.getDataThunk('get', `articles/${id}/likes`, getArticleLikesAction);
    await this.props.getDataThunk('get', `articles/${id}/dislikes`, getArticleDislikesAction);
    this.setState({
      username: this.props.articles.author.username,
    });
  }

  componentWillUnmount = () => {
    this.props.clearLikesOrDislikes();
  }

  onChange = (event) => {
    const comment = { ...this.state.comment };
    comment[event.target.name] = event.target.value;
    this.setState({ comment });
  }

  handleDelete = (commentId) => async () => {
    const { id } = this.props.match.params;
    await this.props.postDataThunkPrivate('delete', `articles/${id}/comments/${commentId}`, deleteCommentAction, null);
    window.location.reload();
  }

  onComment = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleUpdate = (commentId) => async () => {
    const { id } = this.props.match.params;
    const { body } = this.state;
    await this.props.postDataThunkPrivate('patch', `articles/${id}/comments/${commentId}`, updateCommentAction, { body });
    this.props.comments.errors ? (
      toast.error(this.props.comments.errors.body))
      : (window.location.replace(`/readArticle/${id}`),
      toast.success('comment updated.'));
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { id } = this.props.match.params;
    const { comment } = this.state;
    await this.props.postDataThunkPrivate('post', `articles/${id}/comments`, createCommentAction, comment);
    this.props.comments.errors ? (
      toast.error(this.props.comments.errors.body))
      : (setTimeout(() => window.location.reload(), 6000),
      (toast.success('comment created.'), setTimeout(() => window.location.reload(), 6000)));
  }

  hideModal = () => {
    this.setState({ modal: 'none' });
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
  const {
    title, body, readers, username, image,
  } = this.state;
  const { id } = this.props.match.params;
  const url = `https://ah-jawans-frontend.herokuapp.com/readArticle/${id}`;
  const tweet = `'${this.state.title}' -by ${this.state.username} @ https://ah-jawans-frontend.herokuapp.com/readArticle/${id}`;

  return (
      <Layout>
        <div className='read-article-body'>
         <ToastContainer position={toast.POSITION.TOP_RIGHT} />
          <div className='container read-article-container'>
            <h2 className='article-text title'>{title}</h2>
            <br />
            { username && <div className='author-image-on-read-article author-name'>
            <ReactImageFallback
              src={image && (image.split(':')[0] === 'https') ? image : `https://res.cloudinary.com/djxhcwowp/image/upload/v${image}`}
              fallbackImage={profileImagePlaceHolder}
              initialImage={LoadingGif}
              alt="profile image"
              className="authorUsername"
            />
              <text>{username}</text>
              </div>}
              <br/>
            <p className='article-text'>{ReactHtmlParser(body)}</p>
            <br />
          </div>
          {body && <div className='sharing-icons'>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
              <img className="" src={facebookIcon} alt="facebook" />
            </a>
            <a href={`https://twitter.com/intent/tweet?text=${tweet}`}>
              <img className="" src={twitter} alt="twitter" />
            </a>
            <a href={`mailto:?subject=${title}&body="${title}" by ${username} @ ${url}`}>
              <img className="" src={gmail} alt="gmail" />
            </a>
            <a
              id="bookmarkarticle"
              onClick={this.handleClick}
            >
              <img className="" src={Bookmark} alt="Bookmark" />
            </a>
          </div>}
          {this.props.articles.tagList && this.props.articles.tagList.map(
            (tag, index) => <Tags key={index} tagText={tag}/>,
          )}

          { body && <div className='vote'><LikeDislike
              handleLike={this.handleLike}
              handleDislike={this.handleDislike}
              likes={likes}
          dislikes={dislikes} /><span className="views">{`Views: ${readers}`}</span></div>}

        <div id="comment-section" className="comment-section">
          {(localStorage.username)
            && <CommentComponent
              onChange={this.onChange}
              onSubmit={this.handleSubmit}
              comment={this.state.comment}
            />
          }
          </div>
          < div className='col-md-5 comments'>
            {this.props.comments.allComments
              && this.props.comments.allComments.map((comment, index) => (
                <div className="card" key={comment.id}>
                  <div className="card-header">
                    <ReactImageFallback
                      src={comment.User.image && (comment.User.image.split(':')[0] === 'https') ? comment.User.image : `https://res.cloudinary.com/djxhcwowp/image/upload/v${comment.User.image}`}
                      fallbackImage={profileImagePlaceHolder}
                      initialImage={LoadingGif}
                      alt="profile image"
                      className="authorUsername"
                    />
                  </div>
                  <div className='edit-comment-icons'>
                    <img
                      src={edit} onClick={() => this.setState({
                        modal: 'block',
                        body: comment.body,
                        id: comment.id,
                      })}
                      id={`comment-edit-icon${index}`}
                      className="comment-edit-icon"
                    />
                      <img
                        src={remove}
                        id={`comment-remove-icon${index}`}
                        className="comment-remove-icon"
                        onClick={this.handleDelete(comment.id)}
                      />
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p>{comment.body}</p>
                      <small className="text-muted">{moment(comment.updatedAt).fromNow()}</small>
                    </blockquote>
                  </div>
                  <div className={`modals ${this.state.modal}`}>
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Edit comment</h5>
                          <button id={`hideModel${index}`} type="button" className="close" onClick={this.hideModal}>
                            <span aria-hidden="true" >&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <textarea id={`textarea${index}`} className="form-control comment-body" name="body" value={this.state.body} onChange={this.onComment.bind(this)} />
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.hideModal}>Cancel</button>
                          <button id={`updatebutton${index}`} type="button" className="btn btn-primary edit-submit" onClick={this.handleUpdate(this.state.id)}>Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
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
  bookmark: PropTypes.string,
  errorsbookmark: PropTypes.string,
  location: PropTypes.object,
  comments: PropTypes.object,
  history: PropTypes.object,
  errors: PropTypes.object,
  id: PropTypes.string,
  comment: PropTypes.object,
};

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
  likes: state.likeDislikeReducer.likes.count,
  dislikes: state.likeDislikeReducer.dislikes.count,
  bookmark: state.bookmark.message,
  errorsbookmark: state.bookmark.errors,
  comments: state.comments.comments,
  errors: state.comments.errors,
  userProfile: state.getUser,
});

const actionCreator = {
  getDataThunk,
  postDataThunkPrivate,
  clearLikesOrDislikes,
};

export default connect(mapStateToProps, actionCreator)(ReadArticle);
