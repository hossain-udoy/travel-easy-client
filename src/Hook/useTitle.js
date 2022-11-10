import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Easy Travel`;
  }, [title]);
};

export default useTitle;
