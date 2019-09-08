
import React from 'react';
import PropTypes from 'prop-types';
import ReactImageFallback from 'react-image-fallback';
import profileImagePlaceHolder from '../assets/images/profile_plaholder.png';
import LoadingGif from '../assets/images/loadingGif.gif';

const FollowingCard = ({
  following, unfollow, viewProfile, followThem,
}) => (
    <>
            { following && following.map((use, index) => (use && (
                <div className="cards">
                 <div className="cards__image">
                 <ReactImageFallback
                  src={use.followedUser.image && (use.followedUser.image.split(':')[0] === 'https') ? use.followedUser.image : `https://res.cloudinary.com/djxhcwowp/image/upload/v${use.followedUser.image}`}
                  fallbackImage={profileImagePlaceHolder}
                  initialImage={LoadingGif}
                  alt="profile image"
                  className="cards__image_pic"
                />
                 </div>
                 <div className="card__inf">
                  <div>
                    <h4 className="card__inf_name usernamevalue"> {use.followedUser.username}</h4>
                  </div>
                  <div className="card__inf_myBtn">
                    <button type="button" id={`${index}d`} className="card__inf_btnPro git btnd card__inf_btn" onClick={viewProfile(use.followedUser)}>
                      Profile
                    </button>
                    {followThem(use.followedUser && use.followedUser.username)
                      && <button type="button" id={`${index}dd`} className="followerbtn  btnd card__inf_btn" onClick={unfollow({ username: use.followedUser.username })}>
                    unfollow
                    </button>}
                  </div>
                  </div>
                  </div>
            )))
              }
    </>
);

FollowingCard.propTypes = {
  following: PropTypes.array,
  unfollow: PropTypes.func,
  viewProfile: PropTypes.func,
  followThem: PropTypes.func,
  follow: PropTypes.func,
};

export default FollowingCard;
