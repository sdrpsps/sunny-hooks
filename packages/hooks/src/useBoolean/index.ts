import { useMemo } from 'react';
import useToggle from '../useToggle';

interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  set: (value: boolean) => void;
  toggle: () => void;
}

export default function useBoolean(defaultValue = false): [boolean, Actions] {
  const [state, { set, toggle }] = useToggle(!!defaultValue);

  const actions: Actions = useMemo(() => {
    const setTrue = () => set(true);
    const setFalse = () => set(false);

    return {
      setTrue,
      setFalse,
      set: (value: boolean) => set(!!value),
      toggle,
    };
  }, []);

  return [state, actions];
}
