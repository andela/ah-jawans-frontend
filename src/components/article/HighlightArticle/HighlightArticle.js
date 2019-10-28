import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class HighlightArticle extends Component {
  state = {
    highlightedText: '',
    anchorKey: '',
    indexStart: 0,
    indexEnd: 0,
    selectionRectangle: null,
    isModalShown: false,
    comment: '',
    elementId: null,
    highlights: null,
    originalHtml: null,
    windowSelection: null,
  };

   componentDidMount = () => {
     if (localStorage.getItem('id') !== null) {
       window.addEventListener('mouseup', this.checkHighlightedText);
       window.addEventListener('click', this.checkHighlightedText);
       window.addEventListener('resize', this.checkHighlightedText);
       window.addEventListener('scroll', this.checkHighlightedText);
     }
   };

   getSelectionRange = (windowSelection) => {
     const selectionRange = windowSelection.toString() && windowSelection.getRangeAt(0);
     const selectionRectangle = selectionRange && selectionRange.getBoundingClientRect();
     return { selectionRange, selectionRectangle };
   };

   checkHighlightedText = () => {
     const { isModalShown } = this.state;
     if (isModalShown || !window.getSelection().toString()) return false;
     const windowSelection = window.getSelection();
     const { selectionRectangle } = this.getSelectionRange(windowSelection);
     const indexStart = Math.min(windowSelection.anchorOffset, windowSelection.focusOffset);
     const indexEnd = Math.max(windowSelection.anchorOffset, windowSelection.focusOffset);
     const highlightedText = windowSelection.toString();
     const { id: elementId } = window.getSelection().anchorNode.parentNode;

     return this.setState((prevState) => ({
       ...prevState,
       indexStart: indexStart || prevState.indexStart,
       indexEnd: indexEnd || prevState.indexEnd,
       highlightedText: highlightedText || prevState.highlightedText,
       windowSelection,
       selectionRectangle,
       elementId: elementId || prevState.elementId,
     }));
   };

   openCommentModal = () => {
     this.setState((prevState) => ({
       ...prevState,
       isModalShown: true,
       comment: '',
     }));
   };

   closeCommentModal = () => {
     this.setState((prevState) => ({
       ...prevState,
       isModalShown: false,
       selectionRectangle: null,
       comment: '',
     }));
   };

   handleChange = ({ target }) => {
     const input = { [target.name]: target.value };
     this.setState((prevState) => ({
       ...prevState,
       ...input,
     }));
   };

   handleSubmit = async (e) => {
     e.preventDefault();
     const {
       highlightedText: text, indexStart, indexEnd, comment, elementId,
     } = this.state;
     const { postHighlight, articleId } = this.props;
     const formData = {
       text,
       indexStart,
       indexEnd,
       comment,
       elementId,
     };
     await postHighlight(formData, articleId);
   };

   render() {
     const {
       selectionRectangle,
       isModalShown,
       comment,
     } = this.state;

     return (
      <div>
        {selectionRectangle && !isModalShown ? (
          <div
            style={{
              position: 'fixed',
              top: `${selectionRectangle.top + 30}px`,
              left: `${selectionRectangle.left}px`,
              zIndex: 12345,
            }}
          >
            <ToastContainer position={toast.POSITION.TOP_RIGHT} />
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.openCommentModal}
              data-toggle="modal"
              data-target="#highlightCommentModal"
            >
              <i className="fas fa-comment" />
            </button>
          </div>
        ) : (
          ''
        )}

         <div
          className="modal"
          id="highlightCommentModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="highlightCommentModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="highlightCommentModalLabel">
                  Comment Highlight
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.closeCommentModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form id="comment-highlight-form" onSubmit={this.handleSubmit}>
                <div className="modal-body">
                  <textarea
                    name="comment"
                    row="4"
                    className="form-control"
                    value={comment}
                    onChange={this.handleChange}
                  />
                  <hr />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                    onClick={this.closeCommentModal}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Higlight details */}
        <div
          className="modal"
          id="highlightDetailsModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="highlightDetailsModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="highlightDetailsModalLabel">
                  Highlight details
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div id="highlightDetailsModalBody" className="modal-body">Hello</div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     );
   }
}

HighlightArticle.propTypes = {
  postHighlight: PropTypes.func,
  articleId: PropTypes.string,
  match: PropTypes.object,
  id: PropTypes.string,
};

export default connect(null,
  null)(HighlightArticle);
