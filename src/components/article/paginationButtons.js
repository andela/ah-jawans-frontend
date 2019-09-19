import React from 'react';
import PropTypes from 'prop-types';

const PaginationButtons = ({
  next, previous, currentPage, dataLength, indexOfLastArticle,
}) => (
    <div className="pagination btn-pagination" id="pagination">
      {(currentPage !== 1)
        && <button
          id="previous"
        className="pagination__prev pagin button1 btn-pagination-prev btn-pagination-prev1"
        onClick={previous}>
            Previous Page
        </button>
        }
        {(((dataLength - 1) - indexOfLastArticle) > 0)
          && <button
          id="next"
          className="pagination__next pagin button1 btn-pagination-prev-next btn-pagination-next1"
          onClick={next}>
              Next Page
          </button>
        }
    </div>
);

PaginationButtons.propTypes = {
  previous: PropTypes.func,
  next: PropTypes.func,
  currentPage: PropTypes.number,
  dataLength: PropTypes.number,
  indexOfLastArticle: PropTypes.number,
};

export default PaginationButtons;
