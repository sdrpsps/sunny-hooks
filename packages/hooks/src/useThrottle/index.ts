import { useEffect, useState } from 'react';
import type { ThrottleOptions } from '../useThrottleFn';
import useThrottleFn from '../useThrottleFn';

function useThrottle(value: any, options: ThrottleOptions) {
  const [throttle, setThrottle] = useState(value);

  const { run } = useThrottleFn(() => setThrottle(value), options);

  useEffect(() => {
    run();
  }, [value]);

  return throttle;
}

export default useThrottle;
