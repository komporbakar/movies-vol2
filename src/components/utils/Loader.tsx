import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Loader = () => {
  return (
    <div className="h-[400px]">
      <SkeletonTheme highlightColor="#444">
        <Skeleton height={500} duration={4} />
      </SkeletonTheme>
    </div>
  );
};

export default Loader;
