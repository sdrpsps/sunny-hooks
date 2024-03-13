/**
 * title: 自定义 shouldUpdate 函数
 * desc: 只有 shouldUpdate function 返回 true 时，才会记录值的变化。
 */

import React, { useState } from 'react';
import { usePrevious } from 'sunnyHooks';

interface Person {
  name: string;
  age: number;
}

const nameCompareFunction = (prev: Person | undefined, next: Person) => {
  if (!prev) {
    return true;
  }
  if (prev.name !== next.name) {
    return true;
  }
  return false;
};

const ageCompareFunction = (prev: Person | undefined, next: Person) => {
  if (!prev) {
    return true;
  }
  if (prev.age !== next.age) {
    return true;
  }
  return false;
};

export default () => {
  const [state, setState] = useState<Person>({ name: 'Jack', age: 18 });
  const [nameInput, setNameInput] = useState('Jack');
  const [ageInput, setAgeInput] = useState(18);
  const prevName = usePrevious(state, nameCompareFunction);
  const prevAge = usePrevious(state, ageCompareFunction);

  return (
    <div>
      <p>Current name: {state.name}</p>
      <p>Current age: {state.age}</p>
      <p>Previous name: {prevName?.name}</p>
      <p>Previous age: {prevAge?.age}</p>

      <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} placeholder="Typed name" />
      <button onClick={() => setState({ ...state, name: nameInput })}>Update name</button>
      <input
        type="text"
        value={ageInput}
        onChange={(e) => setAgeInput(Number(e.target.value))}
        placeholder="Typed age"
      />
      <button onClick={() => setState({ ...state, age: ageInput })}>Update age</button>
    </div>
  );
};
