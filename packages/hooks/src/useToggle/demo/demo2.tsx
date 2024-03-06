/**
 * title: 在任意两个值之间切换
 * desc: 接受两个可选参数，在它们之间进行切换。
 */
import React from 'react';
import { useToggle } from 'sunnyHooks';

export default () => {
  const [state, { toggle, set, setLeft, setRight }] = useToggle('Hello', 'World');

  return (
    <div>
      <p>Effects: {`${state}`}</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={toggle}>Toggle</button>
        <button
          onClick={() => {
            set('Hello');
          }}
        >
          Set Hello
        </button>
        <button
          onClick={() => {
            set('World');
          }}
        >
          Set World
        </button>
        <button onClick={setLeft}>Set Left</button>
        <button onClick={setRight}>Set Right</button>
      </div>
    </div>
  );
};
