import { useEffect } from "react";

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
