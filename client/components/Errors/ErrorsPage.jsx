import React from "react";
import { useDispatch } from "react-redux";

const ErrorsPage = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     dispatch(fetchErrorData());
  //   }, 1000)
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div>
      {/* <h1>ErrorsPage</h1> */}
    </div>
  );
};

export default ErrorsPage;