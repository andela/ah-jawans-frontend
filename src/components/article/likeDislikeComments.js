import React from 'react';
import PropTypes from 'prop-types';
import likeImageEmpty from '../../assets/icons/thumb-up.png';
import dislikeImageEmpty from '../../assets/icons/thumb-down.png';
import likeImageFilled from '../../assets/icons/thumb-up-filled.png';
import dislikeImageFilled from '../../assets/icons/thumb-down-filled.png';
import '../../assets/scss/components/article/likeDislikeArticle.scss';

const likeDislikeComments = ({
  handleLikeComments,
  handleDislikeComments,
  likesComments,
  dislikesComments,
}) => (
        <React.Fragment>
            <img
                id='likeComments4'
                className="like-button4 like-button4"
                src={!likesComments ? likeImageEmpty : likeImageFilled}
                onClick={handleLikeComments}
            />
            <span className="likes-count4">
                {likesComments || 0}
            </span>
            <img
                id='dislikeComments4'
                className="dislike-button4"
                src={!dislikesComments ? dislikeImageEmpty : dislikeImageFilled}
                onClick={handleDislikeComments}
            />
            <span className="dislikes-count4">
                {dislikesComments || 0}
            </span>
        </React.Fragment>
);

likeDislikeComments.propTypes = {
  liked: PropTypes.bool,
  disliked: PropTypes.bool,
  likesComments: PropTypes.integer,
  dislikesComments: PropTypes.integer,
  handleLikeComments: PropTypes.func,
  handleDislikeComments: PropTypes.func,
};

export default likeDislikeComments;
