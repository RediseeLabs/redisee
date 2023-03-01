/*    - helper function that changes data in the redux store to be read by the graph
      - input: graphArr: array of objects that will be from the redux store
               XaxisName: will be whats displayed on x axis
               value: data that we will get from server call
               graphName: name the value so recharts can use it to display it 
      - output: no output, it mutates the store by reference
*/

export const fillGraph = (graphArr, XaxisName, value, graphName) => {
  /*   - flag that we switch to true if graph array is not full  */
  let flag = false;
  for (let i = 0; i < graphArr.length; i++) {
    /* - if element is empty, replace it with data object */
    if (JSON.stringify(graphArr[i]) === '{}') {
      graphArr[i] = { time: XaxisName, [graphName]: value ? value : 0 };
      flag = true;
      break;
    }
  }
  /*  - if array is full, shift the oldest data object and push in the incoming data */
  if (!flag) {
    graphArr.shift();
    graphArr.push({ time: XaxisName, [graphName]: value ? value : 0 });
  }
};
/*  - same kind of function but with object formatted for pie graph */
export const pieGraph = (pieArr, data) => {
  pieArr[i] = {
    name: keySpace,
    value: {
      hits: data.keyspace_hits,
      misses: data.keyspace_misses,
      ratio: data.ratio,
    },
  };
};
