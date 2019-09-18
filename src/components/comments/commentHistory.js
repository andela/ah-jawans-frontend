import React from 'react';
import PropTypes from 'prop-types';

const CommentHistoryModel = ({
  open, hideModal1, Model1Data, index,
}) => (
    <div className={`modals ${open}`}>
        <div className="centere-it">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Comment history</h5>
                <button type="button" className="close" id={`close-modal${index}`} onClick={hideModal1}>
                <span aria-hidden="true" >&times;</span>
                </button>
            </div>
            <div className="modal-body">
                {Model1Data}
            </div>
            </div>
        </div>
    </div>
);

CommentHistoryModel.propTypes = {
  open: PropTypes.string,
  hideModal1: PropTypes.func,
  Model1Data: PropTypes.func,
  index: PropTypes.func,


};

export default CommentHistoryModel;
