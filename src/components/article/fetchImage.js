import ReactParserHtml from 'react-html-parser';
import coverImage from '../../assets/images/cover-image.jpg';

const fetchImage = (body) => {
  const image = ReactParserHtml(body);
  let imageUrl;
  let defaultUrl;
  image.forEach((bd) => {
    if (bd.type === 'figure') {
      imageUrl = bd.props.children[0].props.src;
    }
    defaultUrl = coverImage;
  });
  if (imageUrl) {
    return imageUrl;
  }
  return defaultUrl;
};
export default fetchImage;
