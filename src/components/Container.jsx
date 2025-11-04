import React from "react";

const Container = ({ className, children }) => {
  return (
    <div className={` rounded-2xl bg-accent p-4 ${className}`}>{children}</div>
  );
};

export default Container;
