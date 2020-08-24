import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startLoading, finishLoading } from "../store/modules/loading";

export default (func) => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await func();
      dispatch(finishLoading());
    })();

    return () => dispatch(startLoading());
  }, [func]);
};
