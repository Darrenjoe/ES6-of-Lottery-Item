{
  let arr = Array.of(3, 4, 6, 7, 11);
  console.log('arr=', arr);

  let empty = Array.of();
  console.log('empty=', empty);
}

{
  let p = document.querySelectorAll('p');
  let pArr = Array.from(p);
  pArr.forEach(item => {
    console.log(item.textContent);
  });

  console.log(Array.from([1, 3, 5], item => {
    return item * 2;
  }));
}

{
  // fill(x, y, z)
  // x 为 替换内容 y=>起始位置  z=>截至位置
  console.log('fill-7', [1, 'a', undefined].fill(7));
  console.log('fill-poss', ['a', 'b', 'c'].fill(7, 1, 3));
}

{
  for (let index of ['1', 'c', 'ks'].keys()) {
    console.log('keys', index);
  }
  for (let value of ['1', 'c', 'ks'].values()) {
    console.log('keys', value);
  }
  for (let [index, value] of ['1', 'c', 'ks'].entries()) {
    console.log('entries', index, value);
  }
}

{
  // copyWithin(x, y, z)
  // x=>起始位置 y=>开始读取数字位置 z=>截至该位置之前
  console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
}

{
  console.log([1, 2, 3, 4, 5, 6].find((item) => {
    return item > 3;
  }));
  console.log([1, 2, 3, 4, 5, 6].findIndex((item) => {
    return item > 3;
  }));
}

{
  console.log('number', [1, 2, NaN].includes(1));
  console.log('number', [1, 2, NaN].includes(NaN));
}