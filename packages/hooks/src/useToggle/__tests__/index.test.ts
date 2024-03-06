import { renderHook, act } from '@testing-library/react';
import useToggle from '..';

const callHookToggle = (hook: any) => {
  act(() => {
    hook.result.current[1].toggle();
  });
};

describe('useToggle', () => {
  it('test on init', () => {
    const hook = renderHook(() => useToggle());
    expect(hook.result.current[0]).toBeFalsy();
  });

  it('test on methods', () => {
    const hook = renderHook(() => useToggle('Hello'));
    expect(hook.result.current[0]).toBe('Hello');
    callHookToggle(hook);
    expect(hook.result.current[0]).toBeFalsy();
    act(() => hook.result.current[1].setLeft());
    expect(hook.result.current[0]).toBe('Hello');
    act(() => hook.result.current[1].setRight());
    expect(hook.result.current[0]).toBeFalsy();
  });

  it('test on set', () => {
    const hook = renderHook(() => useToggle('Hello', 'World'));
    callHookToggle(hook);
    expect(hook.result.current[0]).toBe('World');
    callHookToggle(hook);
    expect(hook.result.current[0]).toBe('Hello');
    act(() => hook.result.current[1].set('World'));
    expect(hook.result.current[0]).toBe('World');
    act(() => hook.result.current[1].set('Hello'));
    expect(hook.result.current[0]).toBe('Hello');
  });
});
