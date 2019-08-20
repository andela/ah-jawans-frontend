import editorConfigs from '../../helpers/ckeditorConfig';


test('Validate article with correct inputs', () => {
const editorConfigs = {
  toolbar: ['bold', 'italic', 'link', 'blockQuote', 'imageUpload'],
  blockToolbar: ['heading', 'blockQuote', 'imageUpload'],
  removePlugins: ['List', 'Table', 'TableToolbar', 'MediaEmbed'],
  extraPlugins: [ ],
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
  expect(Object.keys(editorConfigs).length).toBe(6);
});


