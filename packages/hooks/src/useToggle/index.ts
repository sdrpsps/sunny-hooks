import { useMemo, useState } from 'react';

interface Actions<T> {
  setLeft: () => void;
  setRight: () => void;
  set: (value: T) => void;
  toggle: () => void;
}

function useToggle<T = boolean>(): [boolean, Actions<T>];

function useToggle<T>(defaultValue: T): [T, Actions<T>];

function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Actions<T | U>];

function useToggle<T, U>(defaultValue: T = false as T, reverseValue?: U): [T | U, Actions<T | U>] {
  const [state, setState] = useState<T | U>(defaultValue);

  const actions = useMemo(() => {
    const reverseValueOrigin = (reverseValue || !defaultValue) as T | U;

    const toggle = () => {
      setState((state) => (state === defaultValue ? reverseValueOrigin : defaultValue));
    };
    const set = (value: T | U) => setState(value);
    const setLeft = () => set(defaultValue);
    const setRight = () => set(reverseValueOrigin);

    return { toggle, set, setLeft, setRight };
  }, []);

  return [state, actions];
}

export default useToggle;
