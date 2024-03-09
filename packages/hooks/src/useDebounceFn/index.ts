import { useMemo } from 'react';
import { useLatest } from '..';
import { debounce } from 'lodash-es';

export interface DebounceOptions {
  wait?: number; // 延迟的毫秒数
  leading?: boolean; // 延迟开始前调用
  trailing?: boolean; // 延迟结束后调用
}

function useDebounceFn<T extends (...args: any[]) => any>(fn: T, options?: DebounceOptions) {
  // 确保 fn 是最新的
  const fnRef = useLatest(fn);
  const wait = options?.wait || 1000;

  const debounced = useMemo(() => {
    return debounce((...args: Parameters<T>): ReturnType<T> => fnRef.current(...args), wait, options);
  }, []);

  return {
    run: debounced,
    cancel: debounced.cancel(),
    flush: debounced.flush(),
  };
}

export default useDebounceFn;
