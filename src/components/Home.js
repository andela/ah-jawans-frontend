import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/scss/components/article/homePage.scss';
import Layout from './Layout/Layout';
import books from '../assets/images/bookcase.jpg';
import SingleArticle from './article/singleArticle';
import { getDataThunk } from '../redux/thunks/index';
import fetchImage from './article/fetchImage';
import PaginationComponent from './article/Pagination';
import Spinner from '../assets/icons/spinner.gif';

export class Home extends Component {
  render() {
    return (
      <Layout>
         <div className='header-image'>
          <img src={books}/>
          <div className='welcome'>
            <p>Author’s Heaven taps into the brains of the world’s most insightful writers,
              thinkers, and storytellers to bring you the smartest takes on topics that matter. </p>
            <br/>
            {!localStorage.id && <Link to="/signup"><button type="submit" className="button1">Get started</button></Link>}
          </div>
        </div>
        <main role='main'>
          <div className='album py-5 bg-light home-page-container'>
            <div className='container'>
              {console.log('this.props.articles>>>', this.props.articles.length)}
              {this.props.articles.length
                ? <div className='row'>
                {this.props.articles.length > 0 && this.props.articles.map((article) => <Link
                  key={article.id}
                  to={`/readArticle/${article.id}`}
                  className='col-md-3'>
                  <SingleArticle
                    title={article.title}
                    readTime={article.readtime}
                    image={fetchImage(article.body)}
                    author={article.author.username}
                    id={article.id}
                  />
                </Link>)}
              </div>
                : (<div className="spinnerImage11">
              <img src={Spinner}className="spinnerImage1"/>
            </div>)
              }
              <div className="row pagination center-align">
                <PaginationComponent />
              </div>
              <div className="clear" />
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

Home.propTypes = {
  getDataThunk: PropTypes.func,
  articles: PropTypes.array,
};

export const mapStateToProps = (state) => ({
  articles: state.articles.articles,
});

const actionCreator = {
  getDataThunk,
};

export default connect(mapStateToProps, actionCreator)(Home);
