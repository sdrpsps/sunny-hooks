/**
 * title: 基础用法
 * desc: ThrottledValue 每隔 500ms 变化一次。
 */

import React, { useState } from 'react';
import { useThrottle } from 'sunnyHooks';

export default () => {
  const [value, setValue] = useState('');
  const throttleValue = useThrottle(value, { wait: 500 });

  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Typed value" />
      <p>ThrottledValue: {throttleValue}</p>
    </div>
  );
};
