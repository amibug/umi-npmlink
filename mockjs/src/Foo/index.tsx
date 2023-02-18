import React, { type FC } from 'react';

const Foo: FC<{ title: string }> = (props) => {
  return (
    <>
      <h4>{props.title}</h4>
      <span>测试</span>
      <span>测试</span>
    </>
  );
};

export default Foo;
