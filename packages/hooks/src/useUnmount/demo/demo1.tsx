/**
 * title: 基础用法
 * desc: 在组件卸载时，执行函数。
 */

import React from 'react';
import { useBoolean, useUnmount } from 'sunnyHooks';
import { message } from 'antd';

const MyComponent = () => {
  useUnmount(() => {
    message.info('组件卸载了');
  });

  return <p>MyComponent</p>;
};

export default () => {
  const [state, { toggle }] = useBoolean(true);

  return (
    <div>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </div>
  );
};
