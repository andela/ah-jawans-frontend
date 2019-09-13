import React from 'react';
import PropTypes from 'prop-types';
import likeImageEmpty from '../../assets/icons/thumb-up.png';
import dislikeImageEmpty from '../../assets/icons/thumb-down.png';
import likeImageFilled from '../../assets/icons/thumb-up-filled.png';
import dislikeImageFilled from '../../assets/icons/thumb-down-filled.png';
import '../../assets/scss/components/article/likeDislikeArticle.scss';

const likeDislike = ({
  handleLike,
  handleDislike,
  likes,
  dislikes,
}) => (
  <React.Fragment>
    <img
      id='like'
      className="like-button like-button1"
      src={!likes ? likeImageEmpty : likeImageFilled}
      onClick={handleLike}
    />
    <span className="likes-count">
      {likes || 0}
    </span>
  <img
    id='dislike'
    className="dislike-button"
    src={!dislikes ? dislikeImageEmpty : dislikeImageFilled}
    onClick={handleDislike}
  />
  <span className="dislikes-count">
    {dislikes || 0}
  </span>
</React.Fragment>
);

likeDislike.propTypes = {
  liked: PropTypes.bool,
  disliked: PropTypes.bool,
  likes: PropTypes.integer,
  dislikes: PropTypes.integer,
  handleLike: PropTypes.func,
  handleDislike: PropTypes.func,
};

export default likeDislike;
