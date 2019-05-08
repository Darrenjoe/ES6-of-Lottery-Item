{
  let regex = new RegExp('xyz', 'i'); // es5写法
  let regex2 = new RegExp(/xyz/i); // esd5写法2

  console.log(regex.test('xyz123'), regex2.test('xyz123'));

  let regex3 = new RegExp(/xyz/ig, 'i'); // es6写法

  console.log(regex3.flags);
}
{
  let s = 'bbb_bb_b';
  let a1 = /b+/g;
  let a2 = /b+/y;
  console.log('one', a1.exec(s), a2.exec(s));
  console.log('two', a1.exec(s), a2.exec(s));

  console.log('two', a1.sticky, a2.sticky);
}
{
  console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));
  console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'));

  console.log(/\u{61}/.test('a'));
  console.log(/\u{61}/u.test('a'));
  console.log(`\u{20BB7}`);
  // . 可以匹配两个字节长度一下的所有字节 u可全匹配
}