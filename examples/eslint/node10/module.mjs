import http from 'http';

export async function foo(obj) {
  return { ...obj, http };
}
