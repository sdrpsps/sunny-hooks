/**
 * title: 基础用法
 * desc: 切换 boolean，可以接收默认值。
 */

import React from 'react';
import { useBoolean } from 'sunnyHooks';

export default () => {
  const [state, { toggle, setTrue, setFalse }] = useBoolean();
  return (
    <div>
      <p>Effects: {`${state}`}</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={toggle}>Toggle</button>
        <button onClick={setTrue}>Set True</button>
        <button onClick={setFalse}>Set False</button>
      </div>
    </div>
  );
};
