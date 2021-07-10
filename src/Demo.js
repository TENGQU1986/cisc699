import React from "react";
import LazyLoading from "./LazyLoading";
import Parent from "./Parent";
import RedisCacheDemo from "./RedisCacheDemo";

const Demo = (props) => {
  return (
    <div>
      <Parent user={props.user} />

      <LazyLoading className="lazy" />

      <RedisCacheDemo />
    </div>
  );
};

export default Demo;
