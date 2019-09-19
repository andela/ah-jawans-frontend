import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getbookmarkAction } from '../../../redux/actions/user/BookmarkAction';
import '../../../assets/scss/components/article/Pagination.scss';
import { getDataThunkPrivate } from '../../../redux/thunks/index';

export class Pagination extends Component {
  state = { buttons: [], pageNumber: 1, articlesCount: 0 };

  displayButtons = (articlesCount) => {
    const maxPerPage = 12;
    const notRounded = (articlesCount / maxPerPage);
    const numberOfButtons = Math.ceil(notRounded);
    let buttons = [];
    for (let i = 1; i <= numberOfButtons; i += 1) {
      buttons = [
        ...buttons,
        {
          offset: i === 1 ? 0 : (i * 12) - 12,
          limit: 12,
          label: i,
        },
      ];
    }
    this.setState((prevState) => ({ ...prevState, buttons }));
    return buttons;
  };

  componentWillReceiveProps = (nextProps) => {
    const { articlesCount } = nextProps;
    return articlesCount && this.displayButtons(articlesCount);
  };

  componentDidMount = async () => {
    let offset; let limit;
    await this.props.getDataThunkPrivate('get', `/bookmarks?offset=${offset || 0}&limit=${limit || 12}`, getbookmarkAction);
  };

  paginateArticles = async ({ offset, limit, label }) => {
    this.setState((prevState) => ({
      ...prevState,
      pageNumber: label,
    }));
    await this.props.getDataThunkPrivate('get', `/bookmarks?offset=${offset || 0}&limit=${limit || 12}`, getbookmarkAction);
  };

  render() {
    const { buttons, pageNumber } = this.state;
    return (
      <div className="row1">
        <ul className="list-inline pagination">
          {buttons.length ? buttons.map((button, key) => (
            <li key={key}>
              <button
                className={`${pageNumber === button.label ? 'blue' : 'light bold'}`}
                onClick={() => this.paginateArticles(button)}
              >
                {button.label}
              </button>
            </li>
          )) : (<div className="row1">You don’t have any bookmarks</div>)}
        </ul>
      </div>
    );
  }
}

Pagination.propTypes = {
  articlesCount: PropTypes.any,
  getDataThunkPrivate: PropTypes.func,
  articles: PropTypes.array,

};

const mapStateToProps = (state) => ({
  articles: state.bookmark.bookmarks,
  articlesCount: state.bookmark.bookmarkCount,
});


const actionCreator = {
  getDataThunkPrivate,
};

export default connect(
  mapStateToProps, actionCreator,
)(Pagination);
