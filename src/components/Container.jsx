/* eslint-disable */
import cn from "../utils/cn";
import { memo } from "react";

const Container = ({ children, className }) => {
  return (
    <div className={cn("px-4 xl:mx-auto xl:max-w-5xl xl:px-0", className)}>
      {children}
    </div>
  );
};

export default memo(Container);
