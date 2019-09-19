import React from 'react';
import PropTypes from 'prop-types';
import ReactImageFallback from 'react-image-fallback';
import profileImagePlaceHolder from '../assets/images/profile_plaholder.png';
import LoadingGif from '../assets/images/loadingGif.gif';

const ViewAllUserCard = ({
  users, handelOnlick, follow, unfollow, followThem,
}) => (
    <>
      {users && users.map((use, index) => (use && (
        <div className="cards" key={index} onClick={handelOnlick(use)}>
          <div className="cards__image">
            <ReactImageFallback
              src={use.image && (use.image.split(':')[0] === 'https') ? use.image : `https://res.cloudinary.com/djxhcwowp/image/upload/v${use.image}`}
              fallbackImage={profileImagePlaceHolder}
              initialImage={LoadingGif}
              alt="profile image"
              className="cards__image_pic"
            />
          </div>
          <div className="card__inf">
            <div>
              <h5 className="card__inf_name usernamevalue"> {use.username}</h5>
              <p>{use.email}</p>
            </div>
            <div className="card__inf_myBtn">
              {
                followThem(use.username)
                  ? <button type="button" id={`${index}unfollow`} className="followerbtn  btnd card__inf_btn unfollow-btn" onClick={unfollow(use)}>
                    unfollow
                      </button>
                  : <button type="button" id={`${index}f`} className="followerbtn  btnd card__inf_btn" onClick={follow(use)}>
                    follow
                    </button>}
            </div>
          </div>
        </div>
      )))
      }
    </>
);
ViewAllUserCard.propTypes = {
  users: PropTypes.array,
  followData: PropTypes.array,
  handelOnlick: PropTypes.func,
  follow: PropTypes.func,
  unfollow: PropTypes.func,
  followThem: PropTypes.func,
};

export default ViewAllUserCard;
