
const timeDisplay = (date) => {
  const newdata = date.split('-');
  const mt = newdata[2].split('T');
  const event = new Date(Date.UTC(newdata[0], newdata[1], mt[0], 0, 0, 0));
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  return event.toLocaleDateString('en-US', options);
};

export default timeDisplay;
