import { throttle } from 'lodash-es';
import { useMemo } from 'react';
import useLatest from '../useLatest';

export interface ThrottleOptions {
  wait?: number; // 延迟的毫秒数
  leading?: boolean; // 延迟开始前调用
  trailing?: boolean; // 延迟结束后调用
}

function useThrottle<T extends (...args: any[]) => any>(fn: T, options?: ThrottleOptions) {
  const fnRef = useLatest(fn);

  const wait = options?.wait ?? 1000;

  const throttled = useMemo(
    () => throttle((...args: Parameters<T>): ReturnType<T> => fnRef.current(...args), wait, options),
    [],
  );

  return {
    run: throttled,
    cancel: throttled.cancel,
    flush: throttled.flush,
  };
}

export default useThrottle;
