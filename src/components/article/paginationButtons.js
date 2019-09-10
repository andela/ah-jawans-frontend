import React from 'react';
import PropTypes from 'prop-types';

const PaginationButtons = ({ handleOnSubmit, limit, offset }) => (
    <div className="pagination btn-pagination" id="pagination">
        <button
        className="pagination__prev pagin button1 btn-pagination-prev btn-pagination-prev1"
        onClick={
          handleOnSubmit(limit,
            offset >= 10
            && offset - 10)
        }>
            Previous Page
        </button>
        <button
        className="pagination__next pagin button1 btn-pagination-prev-next btn-pagination-next1"
        onClick={
          handleOnSubmit(limit,
            offset + 10)
            }>
            Next Page
        </button>
    </div>
);

PaginationButtons.propTypes = {
  handleOnSubmit: PropTypes.func,
  limit: PropTypes.number,
  offset: PropTypes.number,
};

export default PaginationButtons;
