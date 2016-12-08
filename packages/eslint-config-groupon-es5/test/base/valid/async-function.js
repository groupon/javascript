// babel-eslint and eslint don't play nice for this case:
// https://github.com/eslint/eslint/issues/4442
//
// async function f() {
// }

const g = async () => true;
g(); // no unused
