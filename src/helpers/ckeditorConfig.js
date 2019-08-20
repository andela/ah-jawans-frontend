import imageUploader from './imageUploader';

class UploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file
      .then((file) => imageUploader(file));
  }
}

const UploadAdapterPlugin = (editor) => {
  // eslint-disable-next-line no-param-reassign
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => new UploadAdapter(loader);
};

const editorConfigs = {
  toolbar: ['bold', 'italic', 'link', 'blockQuote', 'imageUpload'],
  blockToolbar: ['heading', 'blockQuote', 'imageUpload'],
  removePlugins: ['List', 'Table', 'TableToolbar', 'MediaEmbed'],
  extraPlugins: [UploadAdapterPlugin],
  placeholder: 'Write your story...',
  heading: {
    options: [
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
      {
        model: 'heading1',
        view: 'h1',
        title: 'Heading 1',
        class: 'ck-heading_heading1',
      },
    ],
  },
};

export default editorConfigs;
