/**
 * title: 基础用法
 * desc: 默认为 boolean 切换，基础用法与 useBoolean 一致。
 */

import React from 'react';
import { useToggle } from 'sunnyHooks';

export default () => {
  const [state, { toggle, setLeft, setRight }] = useToggle();

  return (
    <div>
      <p>Effects: {`${state}`}</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={toggle}>Toggle</button>
        <button onClick={setLeft}>Set False</button>
        <button onClick={setRight}>Set True</button>
      </div>
    </div>
  );
};
