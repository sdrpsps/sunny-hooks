/**
 * title: 基础用法
 * desc: 频繁调用 run，但只会在所有点击完成 500ms 后执行一次相关函数
 */

import React from 'react';
import { useState } from 'react';
import useDebounceFn from '..';

export default () => {
  const [count, setCount] = useState(0);
  const { run } = useDebounceFn(() => setCount(count + 1), { wait: 500 });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={run}>Click fast!</button>
    </div>
  );
};
