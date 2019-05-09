{
  console.log('a', '\u0061');
  console.log('s', '\u20BB7');
  console.log('s', `\u{20BB7}`);
}

{
let s = '𠮷';
console.log('length', s.length);
console.log('0', s.charAt(0));
console.log('1', s.charAt(1));
console.log('at0', s.charCodeAt(0));
console.log('at0', s.charCodeAt(1));
}
