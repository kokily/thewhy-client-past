import { useMemo } from "react";

const useComponentWillMount = (func) => {
  useMemo(func, []);
};

export default useComponentWillMount;