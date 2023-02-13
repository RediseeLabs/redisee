export const fillGraph = (graphArr, XaxisName, value) => {
  let flag = false;
  for (let i = 0; i < graphArr.length; i++) {
    if (JSON.stringify(graphArr[i]) === "{}") {
      graphArr[i] = { time: XaxisName, value: value };
      flag = true;
      break;
    }
  }
  if (!flag) {
    graphArr.shift();
    graphArr.push({ time: XaxisName, value: value });
  }
};
