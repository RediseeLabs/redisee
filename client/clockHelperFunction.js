export const clock = (duration) => {
  // Hours, minutes and seconds
  const hrs = Math.floor(duration / 3600);
  const mins = Math.floor((duration % 3600) / 60);
  const secs = Math.floor(duration % 60);

  let clock = '';

  if (hrs > 0) {
    clock += '' + hrs + ':' + (mins < 10 ? '0' : '');
  }
  clock += '' + mins + ':' + (secs < 10 ? '0' : '');
  clock += '' + secs;
  return clock;
};
