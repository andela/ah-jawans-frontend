import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import onComputer from '../../assets/images/onComputer.jpg';
import remove from '../../assets/icons/delete.png';
import edit from '../../assets/icons/edit.png';

const SingleArticle = ({
  image,
  title,
  author,
  readTime,
  page,
}) => (
    <div className='card mb-4 shadow-sm'>
    <img className='img-card' src={ (image && `https://res.cloudinary.com/djxhcwowp/image/upload/v${image}`) || onComputer }/>
    <div className='card-body'>
        <p className='card-text article-title'>{title}</p>
        <small className='author'>{author}</small>
        <small className='read-time'>{readTime}</small>
        {page === 'Author' && <small className='edit-icon'><small className='edit-icon'><Link to='/'><img src={edit}/></Link></small>
        <small className='remove-icon'><Link to='/'><img src={remove}/></Link></small></small>}
    </div>
    </div>
);

SingleArticle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  readTime: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.integer,
  page: PropTypes.string,
};

export default SingleArticle;
