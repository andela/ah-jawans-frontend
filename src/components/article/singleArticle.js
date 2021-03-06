import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import remove from '../../assets/icons/delete.png';
import edit from '../../assets/icons/edit.png';


const SingleArticle = ({
  image,
  title,
  author,
  readTime,
  page,
  onClick,
  id,
}) => (
    <div className='mb-4 shadow-sm article-card'>
      <img className='img-card' src={image} />
      <div className='card-body'>
        <p className='card-text article-title'>{title}</p>
        <small className='author'>{author}</small>
        <small className='read-time'>{readTime}</small>
        {page === 'Author' && <small className='edit-icon'><small className='edit-icon'><Link to={`/updateArticle/${id}`}><img src={edit} /></Link></small>
          <small className='remove-icon' onClick={onClick}><Link to='/profile'><img src={remove} /></Link></small></small>}
        {page === 'Bookmark' && <small className='edit-icon'>
          <small className='remove-icon' onClick={onClick}><Link to='/BookmarkedArticles'><img src={remove} /></Link></small></small>}
      </div >
    </div >
);

SingleArticle.propTypes = {
  title: PropTypes.string,
  readTime: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.integer,
  page: PropTypes.string,
  onClick: PropTypes.func,
};

export default SingleArticle;
