import React from 'react';
import PropTypes from 'prop-types';
import timeDispaly from './timeDisplay';


const ArcticleCard = ({
  articles, fetchImage, handleView,
}) => (
    <>
        {articles ? articles.map((article, index) => (
          article ? (
            <div id={`view${index}`} className="searchContainer__articleContent_card arcticleCard" onClick={handleView(article.id)}>
                <div className="arcticleCard__image" id={`${index}image`}>
                    <img
                    src={
                        fetchImage(article.body)
                    }
                    className="arcticleCard__image_img"
                    />
                </div>
                <div className="arcticleCard__content">
                    <h4>{article.title}</h4>
                    <p>{article.description}</p>
                    <p>{timeDispaly(article.createdAt)}</p>
                    <p>{article.readtime} Read</p>
                </div>
            </div>
          ) : (<div className="searchContainer__articleContent_card arcticleCard">
              <h5>No data found</h5>
          </div>)
        )) : (<div className="searchContainer__articleContent_card arcticleCard">
              <h5>No article found after search</h5>
          </div>)}
        {/* <PaginationButtons
            handleOnSubmit={handleOnSubmit}
            limit={limit}
            offset={offset}
            /> */}
    </>
);

ArcticleCard.propTypes = {
  articles: PropTypes.array,
  fetchImage: PropTypes.func,
  handleView: PropTypes.func,
  handleOnSubmit: PropTypes.func,
  limit: PropTypes.number,
  offset: PropTypes.number,
};

export default ArcticleCard;
