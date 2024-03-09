/**
 * title: 基础用法
 * desc: useLatest 返回的永远是最新值
 */

import React from 'react';
import { useEffect, useState } from 'react';
import { useLatest } from 'sunnyHooks';

export default () => {
  const [state, setState] = useState(0);

  const latestCountState = useLatest(state);

  useEffect(() => {
    const interval = setInterval(() => {
      setState(latestCountState.current + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Effects: {state}</p>
    </div>
  );
};
