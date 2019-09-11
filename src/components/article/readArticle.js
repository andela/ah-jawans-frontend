/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import Layout from '../Layout/Layout';
import { getDataThunk } from '../../redux/thunks/index';
import getArticlesAction from '../../redux/actions/getArticlesAction';
import '../../assets/scss/components/article/readArticle.scss';
import '../../assets/scss/components/article/sharingArticle.scss';
import facebookIcon from '../../assets/images/facebookIcon.png';
import gmail from '../../assets/images/gmail.png';
import twitter from '../../assets/images/twitter.png';

export class ReadArticle extends Component {
  state = {
    username: '',
    title: '',
    body: '',
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
}

render() {
  const { title, body, username } = this.state;
  const { id } = this.props.match.params;
  const url = `https://ah-jawans-frontend.herokuapp.com/readArticle/${id}`;
  const tweet = `'${this.state.title}' -by ${this.state.username} @ https://ah-jawans-frontend.herokuapp.com/readArticle/${id}`;
  return (
          <Layout>
          <div className = 'read-article-body'>
            <div className='container read-article-container'>
                <h2 className='article-text title'>{title}</h2>
                <br/>
                <p className='article-text'>{ReactHtmlParser(body)}</p>
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
