/* eslint-disable no-unused-expressions */
import React, { Component, Fragment } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-inline';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import editorConfigs from '../../helpers/ckeditorConfig';
import { articleAction } from '../../redux/actions/articleActions/articleActions';
import { postDataThunkPrivate } from '../../redux/thunks';
import Layout from '../Layout';

export class CreateArticle extends Component {
  state = {
    title: '',
    body: '',
    tags: '',
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.postDataThunkPrivate('post', '/articles', articleAction, this.state);
    this.props.article.article.errors ? (
      toast.error(this.props.article.article.errors.title),
      toast.error(this.props.article.article.errors.body))
      : (
        window.location.replace('/profile'),
        toast.success('Article created successfully '));
  }

  handleCKEditorChange = (event, editor) => this.setState({ body: editor.getData() });

  render() {
    const { title, tags } = this.state;
    return (
      <Layout>
        <Fragment>
          <div className="container-fluid">
            <div className="editor-wrapper">
              <input
                name="title"
                id="title"
              className="form-control article-title"
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
              onChange={this.handleCKEditorChange}
              id="bodyck"
            />
            </div>
            <div className="row">
              <div className="col-md-9">
                  <input
                    name="tags"
                    id="tags"
                   className="form-control tags"
                    value={tags}
                    placeholder="Tags..."
                    onChange={(event) => {
                      this.setState({ tags: event.target.value });
                    }}
                />
              </div>
            <div className="col-md-3">
              <button id="article-button"
              className="btn btn-primary art-btn"
              type="submit"
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

CreateArticle.propTypes = {
  article: PropTypes.object,
  postDataThunkPrivate: PropTypes.func,
  history: PropTypes.object,
  errors: PropTypes.object,
};

const actionCreator = {
  postDataThunkPrivate,
};

export const mapStateToProps = (state) => ({
  article: state.article,
  errors: state.article.article.errors,
});

export default connect(
  mapStateToProps,
  actionCreator,
)(CreateArticle);
