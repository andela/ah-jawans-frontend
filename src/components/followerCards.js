import React from 'react';
import PropTypes from 'prop-types';
import ReactImageFallback from 'react-image-fallback';
import profileImagePlaceHolder from '../assets/images/profile_plaholder.png';
import LoadingGif from '../assets/images/loadingGif.gif';

const FollowerCard = ({
  follower, viewProfile, followThem, unfollow, follow,
}) => (
    <>
      {follower && follower.map((use, index) => (use && (
        <div className="cards" onClick={viewProfile(use.follower)}>
          <div className="cards__image">
            <ReactImageFallback
              src={use.follower.image && (use.follower.image.split(':')[0] === 'https') ? use.follower.image : `https://res.cloudinary.com/djxhcwowp/image/upload/v${use.follower.image}`}
              fallbackImage={profileImagePlaceHolder}
              initialImage={LoadingGif}
              alt="profile image"
              className="cards__image_pic"
            />
          </div>
          <div className="card__inf">
            <div>
              <h4 className="card__inf_name usernamevalue"> {use.follower.username}</h4>
            </div>
            <div className="card__inf_myBtn">
              <button type="button" id={`${index}g`} className="card__inf_btnPro git btnd card__inf_btn" onClick={viewProfile(use.follower)}>
                View Profile
            </button>
              {followThem(use.follower.username)
                ? <button type="button" id={`${index}unfollowbt`} className="followerbtn  btnd card__inf_btn unfollow-btn" onClick={unfollow({ username: use.follower.username })}>
                  unfollow
              </button>
                : <button type="button" id={`${index}followbt`} className="followerbtn  btnd card__inf_btn" onClick={follow({ username: use.follower.username })}>
                  follow
              </button>
              }
            </div>
          </div>
        </div>
      )))
      }
    </>
);

FollowerCard.propTypes = {
  follower: PropTypes.array,
  followThem: PropTypes.func,
  viewProfile: PropTypes.func,
  unfollow: PropTypes.func,
  follow: PropTypes.func,
};

export default FollowerCard;
