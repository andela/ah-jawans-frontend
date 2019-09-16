import React from 'react';
import facebookIcon from '../../assets/images/facebookIcon.png';
import gmail from '../../assets/images/gmail.png';
import twitter from '../../assets/images/twitter.png';


class SocialLogin extends React.Component {
  handleOnclick = (provider) => () => {
    window.location.replace(`https://ah-jawans-backend.herokuapp.com/api/social/login/${provider}`);
  };

  render() {
    return (
      <>
        <div className="socialLogin">
          <a href="#">
            <img className="socialLogin__img facebook" id="facebook" src={facebookIcon} alt="facebook" onClick={this.handleOnclick('facebook')}/>
          </a>
          <a href="#">
            <img className="socialLogin__img" id="twitter" src={twitter} alt="twitter" onClick={this.handleOnclick('twitter')}/>
          </a>
          <a href="#">
            <img className="socialLogin__img" id="google" src={gmail} alt="google" onClick={this.handleOnclick('google')}/>
          </a>
        </div>
      </>
    );
  }
}

export default SocialLogin;
