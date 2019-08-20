/* eslint-disable no-unused-expressions */
import React, { Component, Fragment } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-inline';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import editorConfigs from '../../helpers/ckeditorConfig';
import { updateArticleAction } from '../../redux/actions/articleActions/articleActions';
import getArticlesAction from '../../redux/actions/getArticlesAction';
import { postDataThunkPrivate } from '../../redux/thunks';
import Layout from '../Layout';

export class UpdateArticle extends Component {
    state = {
      title: '',
      body: '',
      tags: '',
    }

    componentDidMount = async () => {
      const { articleId } = this.props.match.params;
      await this.props.postDataThunkPrivate('get', `articles/${articleId}`, getArticlesAction, null);
      const { articles } = this.props.articles;
      this.setState({
        title: articles.title,
        body: articles.body,
        tags: articles.tags,
      });
    }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { articleId } = this.props.match.params;
    await this.props.postDataThunkPrivate('patch', `/articles/${articleId}`, updateArticleAction, this.state);
    this.props.articles.articles.errors ? (
      toast.error(this.props.articles.articles.errors.title),
      toast.error(this.props.articles.articles.errors.body))
      : (
        this.props.history.push(`/readArticle/${articleId}`),
        toast.success('Article updated successfully '));
  }

  render() {
    const { title, tags } = this.state;
    return (
      <Layout>
        <Fragment>
          <div className="container-fluid">
            <div className="editor-wrapper">
          <input
                className="form-control article-title"
                id="title"
              value={title}
              placeholder="Title..."
              onChange={(event) => {
                this.setState({ title: event.target.value });
              }}
            />
            <div className="spacer" />
            <div className="body-content">
          <CKEditor
              editor={ClassicEditor}
              data={this.state.body}
              config={editorConfigs}
              onChange={(event, editor) => {
                const data = editor.getData();
                this.setState({ body: data });
              }}
            />
            </div>
            <div className="row">
              <div className="col-md-9">
                  <input
                    id="tags"
                   className="form-control"
                    value={tags}
                    placeholder="Tags..."
                    onChange={(event) => {
                      this.setState({ tags: event.target.value });
                    }}
                />
              </div>
            <div className="col-md-3">
            <button
              id="article-button"
              className="btn btn-primary art-btn"
              type="button"
                onClick={this.handleSubmit}>
                Publish
              </button>
              </div>
              </div>
          </div>
          </div>
        </Fragment>
      </Layout>
    );
  }
}

UpdateArticle.propTypes = {
  articles: PropTypes.object,
  getDataThunk: PropTypes.func,
  postDataThunkPrivate: PropTypes.func,
  history: PropTypes.object,
  errors: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      articleId: PropTypes.string,
    }),
  }),
};

const actionCreator = {
  postDataThunkPrivate,
};

const mapStateToProps = (state) => ({
  articles: state.articles,
  errors: state.articles.articles.errors,
});

export default connect(
  mapStateToProps,
  actionCreator,
)(UpdateArticle);
