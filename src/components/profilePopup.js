/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ReactImageFallback from 'react-image-fallback';
import profileImagePlaceHolder from '../assets/images/profile_plaholder.png';
import LoadingGif from '../assets/images/loadingGif.gif';
import ArticleCard from './article/searchArticlecard';

const ProfileView = ({
  image, firstName, lastName, dob, bio, username, removeModel, follow, unfollow, followThem,
  fetchImage, limit, offset, articles, handleView, handleOnSubmit,
}) => (
    <>
    <div id="myModal" className="modal">
        <div className="modal-content modal-content-profile">
        <span id="close" className="close" onClick={removeModel}>&times;</span>
        <div className="profile">
          <div className="profile__imagecontent">
            <ReactImageFallback
                    src={image && (image.split(':')[0] === 'https') ? image : `https://res.cloudinary.com/djxhcwowp/image/upload/v${image}`}
                    fallbackImage={profileImagePlaceHolder}
                    initialImage={LoadingGif}
                    alt="profile image"
                    className="profile__imagecontent"
                    />
          </div>
          <div className="profile__profilecontent">
              <h6 className="profile__profilecontent_h">Username:</h6> <p className="profile__profilecontent_p">{username}</p>
              <h6 className="profile__profilecontent_h">First Name:</h6> <p className="profile__profilecontent_p">{firstName}</p>
              <h6 className="profile__profilecontent_h">Last Name:</h6> <p className="profile__profilecontent_p">{lastName}</p>
              <h6 className="profile__profilecontent_h">Date of birth:</h6> <p className="profile__profilecontent_p">{dob}</p>
              <h6 className="profile__profilecontent_h">bio:</h6> <p className="profile__profilecontent_p">{bio}</p>
          </div>
        </div>
        <div className="profile-btn">
          {
                followThem(username)
                  ? <button type="button" className="followerbtn  btnd unfollow-btn" onClick={unfollow({ username })}>
                unfollow
              </button>
                  : <button type="button" className="followerbtn  btnd" onClick={follow({ username })}>
              follow
              </button>}
          </div>
        <div className="articles-cards">
        <ArticleCard
            articles={articles && articles}
            fetchImage={fetchImage}
            handleView={handleView}
            handleOnSubmit={handleOnSubmit}
            limit={limit}
            offset={offset}
          />
        </div>
        </div>
        </div>
    </>
);

ProfileView.protoType = {
  users: PropTypes.array,
  handelOnlick: PropTypes.func,
  articles: PropTypes.array,
  handleView: PropTypes.func,
  handleOnSubmit: PropTypes.func,
};

export default ProfileView;
