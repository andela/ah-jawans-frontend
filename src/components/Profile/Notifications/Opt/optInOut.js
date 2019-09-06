import React from 'react';
import PropTypes from 'prop-types';

const OptInOrOut = ({
  handleAppChange, handledAppChange, handleEmailChange, handledEmailChange, opts,
}) => (
  <div className="notify">
    <h4>Notifications</h4>
    <div className="on-app">
      <h5>On App</h5>
      <div className="on-app-inputs">
        <p>Opt In</p><input type='radio' name='App' value="Opt in" onChange={handleAppChange} checked={opts.inapp ? 'checked' : ''} />
        <p>Opt Out</p><input type='radio'name='App'value="Opt Out" onChange={handledAppChange} checked={!opts.inapp ? 'checked' : ''} />
      </div>
    </div>
    <div className="on-email">
    <h5>On Email</h5>
    <div className="on-email-inputs">
      <p>Opt In</p><input type='radio' name='Email'value="Opt In"onChange={handleEmailChange} checked={opts.email ? 'checked' : ''} />
      <p>Opt Out</p><input type='radio'name='Email'value="Opt Out" onChange={handledEmailChange} checked={!opts.email ? 'checked' : ''} />
    </div>
    </div>
  </div>
);

OptInOrOut.propTypes = {
  handleAppChange: PropTypes.func,
  handledAppChange: PropTypes.func,
  handleEmailChange: PropTypes.func,
  handledEmailChange: PropTypes.func,
  opts: PropTypes.object,
};

export default OptInOrOut;
