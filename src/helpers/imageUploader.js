import '@babel/polyfill';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const imageUploader = async (file) => {
  try {
    const formData = new FormData();
    formData.append('upload_preset', 'nnbsghsu');
    formData.append('file', file);
    const result = await axios.post('https://api.cloudinary.com/v1_1/djxhcwowp/image/upload', formData, {
      headers: { 'content-type': 'application/form-data' },
      onUploadProgress: (progressEvent) => {
        Math.round((progressEvent.loaded * 100) / progressEvent.total);
      },
    });
    return {
      default: result.data.url,
    };
  } catch (error) {
    return error;
  }
};
export default imageUploader;
