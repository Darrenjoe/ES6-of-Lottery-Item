{
  let a, b, reset;
  [a, b] = [1, 2];
  console.log(a, b);
}
{
  let a, b, reset;
  [a, b, ...reset] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, reset);
}
{
  let a, b;
  ({ a, b } = { a: 1, b: 2 });
  console.log(a, b);
}
{
  let a, b, c;
  [a, b, c = 3] = [1, 2];
  console.log(a, b, c);
}
{
  function f() {
    return [1, 2];
  }
  let a, b;
  [a, b] = f();
  console.log(a, b);
}
{
  function f() {
    return [1, 2, 3, 4, 5];
  }
  let a, b, c;
  [a, ...b] = f();
  console.log(a, b);
}
{
  let o = {
    p: 42,
    q: true
  }
  let { p, q } = o;
  console.log(p, q);
}
{
  let { p = 42, q = 5 } = { p: 3 };
  console.log(p, q);
}
{
  let metaData = {
    title: 'abc',
    test: [{
      title: 'test',
      desc: 'descripts'
    }]
  }
  let { title: esTitle, test: [{ title: cnTitle }] } = metaData;
  console.log(esTitle, cnTitle);
}
