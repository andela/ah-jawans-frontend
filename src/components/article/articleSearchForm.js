import React from 'react';
import PropTypes from 'prop-types';

const ArticleSearchForm = ({ handleOnChange, handleOnSubmit }) => (
    <>
        <form id="searchForm" onSubmit={handleOnSubmit(2, 0)} className="sideBars searchContainer__articlesContainer_input sideBar">
            <h6>FILTER BY</h6>
            <input
                onChange={handleOnChange}
                type="text"
                name="authorName"
                className="sideBar__input"
                placeholder="Author Name"
                />
            <input
                onChange={handleOnChange}
                name="keyword"
                type="text"
                className="sideBar__input"
                placeholder="Keyword"
            />
            <input
                onChange={handleOnChange}
                name="tag"
                type="text"
                className="sideBar__input"
                placeholder="Tag Name"
            />
            <input
                onChange={handleOnChange}
                name="title"
                type="text"
                className="sideBar__input"
                placeholder="Article Title"
                />
            <button
                id="searchFormbtn"
                type="submit"
                className="sideBar__btn button1">
                    Search
            </button>
        </form>
    </>
);

ArticleSearchForm.propTypes = {
  handleOnSubmit: PropTypes.func,
  handleOnChange: PropTypes.func,
};

export default ArticleSearchForm;
