/**
 * title: 基础用法
 * desc: 频繁调用 run，但只会每隔 500ms 执行一次相关函数。
 */
import React, { useState } from 'react';
import { useThrottleFn } from 'sunnyHooks';

export default () => {
  const [count, setCount] = useState(0);
  const { run } = useThrottleFn(() => setCount(count + 1), { wait: 500 });

  return (
    <div>
      <p>Clicked count: {count}</p>
      <button onClick={run}>Click fast!</button>
    </div>
  );
};
