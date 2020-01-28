import React from 'react';

export default function Background(props) {
  const { children } = props;

  return <div className="w-full bg-pineapple-500">{children}</div>;
}
