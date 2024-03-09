import { renderHook, act } from '@testing-library/react';
import useToggle from '..';

const setUp = <T, U>(defaultValue?: T, reverseValue?: U) => renderHook(() => useToggle(defaultValue, reverseValue));

const callHookToggle = (hook: any) => {
  act(() => {
    hook.result.current[1].toggle();
  });
};

describe('useToggle', () => {
  it('test on init', () => {
    const { result } = setUp();
    expect(result.current[0]).toBeFalsy();
  });

  it('test on methods', () => {
    const hook = setUp('Hello');
    const { result } = hook;
    expect(result.current[0]).toBe('Hello');
    callHookToggle(hook);
    expect(result.current[0]).toBeFalsy();
    act(() => result.current[1].setLeft());
    expect(result.current[0]).toBe('Hello');
    act(() => result.current[1].setRight());
    expect(result.current[0]).toBeFalsy();
  });

  it('test on set', () => {
    const hook = setUp('Hello', 'World');
    const { result } = hook;
    callHookToggle(hook);
    expect(result.current[0]).toBe('World');
    callHookToggle(hook);
    expect(result.current[0]).toBe('Hello');
    act(() => result.current[1].set('World'));
    expect(result.current[0]).toBe('World');
    act(() => result.current[1].set('Hello'));
    expect(result.current[0]).toBe('Hello');
  });
});
