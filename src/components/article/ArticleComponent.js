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

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (
      !token
      || this.props.article.errors === 'There is no token'
    ) {
      localStorage.clear();
      window.location = '/login';
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.postDataThunkPrivate('post', '/articles', articleAction, this.state);
    if (!this.props.article.article.errors) {
      this.props.history.push('/');
      toast.success('article created successfully ');
    } else {
      toast.error(this.props.article.article.errors.title);
      toast.error(this.props.article.article.errors.body);
    }
  }

  render() {
    const { title, body, tags } = this.state;
    return (
      <Layout>
        <Fragment>
          <div className="container-fluid">
            <div className="editor-wrapper">
          <input
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
              onChange={(event, editor) => {
                const data = editor.getData();
                this.setState({ body: data });
              }}
              value={body}
            />
            </div>
            <div className="row">
              <div className="col-md-9">
                <input
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

CreateArticle.propTypes = {
  article: PropTypes.object.isRequired,
  postDataThunkPrivate: PropTypes.func,
  history: PropTypes.object,
  errors: PropTypes.object,
};

const actionCreator = {
  postDataThunkPrivate,
};

const mapStateToProps = (state) => ({
  article: state.article,
  errors: state.article.article.errors,
});

export default connect(
  mapStateToProps,
  actionCreator,
)(CreateArticle);
