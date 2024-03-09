import { useRef } from 'react';

function useLatest<T>(value: T) {
  const ref = useRef(value);
  /**
   * useRef 在组件的整个生命周期中会一直返回它第一次创建时的相同 ref 对象。
   * 这意味着，尽管 useLatest 函数在每次组件重新渲染时都会被调用，
   * useRef 所创建的 ref 对象并不会每次都是新的，
   * 而是始终保持为首次渲染时创建的那一个。
   * 因此，为了确保这个 ref 对象的 current 属性能够反映最新的 value 值，
   * 需要在 useLatest 函数中手动进行 ref.current = value 的赋值操作。
   */
  ref.current = value;

  return ref;
}

export default useLatest;
