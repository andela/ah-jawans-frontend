/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import Layout from '../Layout/Layout';
// import onComputer from '../../assets/images/onComputer.jpg';
import { getDataThunk } from '../../redux/thunks/index';
import getArticlesAction from '../../redux/actions/getArticlesAction';
import '../../assets/scss/components/article/readArticle.scss';

class ReadArticle extends Component {
state = { image: '' }

componentDidMount = async () => {
  const { id } = this.props.match.params;
  await this.props.getDataThunk('get', `articles/${id}`, getArticlesAction);
  const image = ReactHtmlParser(this.props.articles.body)[0].props.children[0].props.src;
  this.setState({ image });
  console.log('image', ReactHtmlParser(this.props.articles.body)[0].props.children[0].props.src);
}

render() {
  return (
          <Layout>
              <div className='container'>
                {/* <img className='read-article-image'
                src={(ReactHtmlParser(this.props.articles.body)
                && this.state.image) || onComputer}/>
                <br/><br/> */}
                <h2 className='article-text title'>{this.props.articles.title}</h2>
                <br/>
                <p className='article-text'>{ReactHtmlParser(this.props.articles.body)}</p>
              </div>
          </Layout>
  );
}
}

ReadArticle.propTypes = {
  getDataThunk: PropTypes.func,
  articles: PropTypes.object,
  match: PropTypes.object,
};

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
});

const actionCreator = {
  getDataThunk,
};

export default connect(mapStateToProps, actionCreator)(ReadArticle);
