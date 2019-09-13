/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Form from '../common/formContainer';
import authorImage from '../../assets/images/profile_plaholder.png';

export class CommentComponent extends Component {
  render() {
    const image = localStorage.getItem('image');
    let image1;
    if (image !== 'null') {
      if (image) {
        // eslint-disable-next-line no-unused-expressions
        image.split(':')[0] === 'https' ? image1 = image : image1 = `https://res.cloudinary.com/djxhcwowp/image/upload/v${image}`;
      }
    }
    return (
      <div className="comment-form">
        <div className="form-header">
          <img src={image1 || authorImage}/>
        </div>
        <Form onSubmit={this.props.onSubmit}>
        <div className="form-group">
        <textarea id="comment-body"
            value={this.props.body}
            name="body"
            type="text"
            placeholder="Write your comment..."
            onChange={this.props.onChange}
            className="form-control"
            />
            </div>
          <div>
          <button id="submit1"
            type = "button"
            className = "btn btn-primary comment-btn" onClick = { this.props.onSubmit } > Submit</button >
          </div>
      </Form>
      </div>
    );
  }
}
export default CommentComponent;
