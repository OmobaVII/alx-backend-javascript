export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const query = weakMap.get(endpoint);
    if (query >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, (query + 1));
  } else {
    weakMap.set(endpoint, 1);
  }
}
