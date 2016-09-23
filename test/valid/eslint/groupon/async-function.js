async function f() {
  return true;
}
f(); // no unused

const g = async () => true;
g(); // no unused
