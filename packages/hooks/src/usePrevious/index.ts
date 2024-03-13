import { useRef } from 'react';

type shouldUpdateFun<T> = (prev: T | undefined, next: T) => boolean;

function defaultShouldUpdate<T>(prev?: T, next?: T) {
  return !Object.is(prev, next);
}

function usePrevious<T>(value: T, shouldUpdate: shouldUpdateFun<T> = defaultShouldUpdate) {
  const prevRef = useRef<T>();
  const currentRef = useRef<T>();

  // 两个值不相等时
  if (shouldUpdate(currentRef.current, value)) {
    prevRef.current = currentRef.current; // 赋旧值
    currentRef.current = value; // 赋新值
  }

  return prevRef.current;
}

export default usePrevious;
