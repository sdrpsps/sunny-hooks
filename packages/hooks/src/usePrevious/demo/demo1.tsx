/**
 * title: 基础用法
 * desc: 记录上次的 count 值
 */

import React, { useState } from 'react';
import { usePrevious } from 'sunnyHooks';

export default () => {
  const [state, setState] = useState('');
  const prevState = usePrevious(state);

  return (
    <div>
      <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="Typed value" />
      <p>Current Value: {state}</p>
      <p>Previous Value: {prevState}</p>
    </div>
  );
};
