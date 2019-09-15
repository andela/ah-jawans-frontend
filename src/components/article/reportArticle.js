import React from 'react';
import PropTypes from 'prop-types';

const ReportArticle = ({ consel, onChange, handleReport }) => (
    <>
        <div id="myModal2" className="modal">
            <div className="modal-content">
            {/* <span id="close" className="close">&times;</span> */}
                <div className="main-div-report">
                    <div className="reporting-content">
                        <div className="reporting-content__story">
                            Report story
                        </div>
                        <div className="reporting-content__input">
                            <form className="report-form" onSubmit={handleReport}>
                                <div>
                                    <input type="radio" name="reportType" value="harsment" onClick={onChange}/>
                                    <p className="report-form__label">harassment </p>
                                </div>
                                <div>
                                    <input type="radio" name="reportType" value="spam" onClick={onChange}/>
                                    <p className="report-form__label">Spam</p>
                                </div>
                                <div>
                                    <input type="radio" name="reportType" value="rules violation" onClick={onChange}/>
                                    <p className="report-form__label">Rules violation</p>
                                </div>
                                <div className="report-form__feedback-block">
                                    <input
                                        id="comment-report"
                                        className="report-form__feedback"
                                        type="text"
                                        name="comment"
                                        placeholder="Additional feedback......"
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="report-form__buttons">
                                    <button
                                    id="reporting-submit"
                                    className="report-form__buttons_report report-form__buttons_btn"
                                    type="submit"
                                    >Report</button>
                                    <button
                                    onClick={consel}
                                    id="concel-btn"
                                    className="report-form__buttons_concel report-form__buttons_btn"
                                    type="button">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

ReportArticle.propTypes = {
  consel: PropTypes.func,
  onChange: PropTypes.func,
  handleReport: PropTypes.func,
};
export default ReportArticle;
