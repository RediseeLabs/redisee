export const clock = (duration) => {
  // Hours, minutes and seconds
  const hrs = Math.floor(duration / 3600);
  const mins = Math.floor((duration % 3600) / 60);
  const secs = Math.floor(duration % 60);

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let clock = '';

  if (hrs > 0) {
    clock += '' + hrs + ':' + (mins < 10 ? '0' : '');
  }

  clock += '' + mins + ':' + (secs < 10 ? '0' : '');
  clock += '' + secs;
  console.log(hrs);
  console.log(mins);
  console.log(secs);
  console.log('input duration' + duration);
  console.log(clock);
  return clock;
};
