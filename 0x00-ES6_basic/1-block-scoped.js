export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* eslint-disable no-shadow */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }
  /* eslint-disable no-shadow */

  return [task, task2];
}
