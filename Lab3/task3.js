const ipToInt = (ip = '127.0.0.1') =>
  ip
    .split('.')
    .map(Number)
    .reduce((acc, byte) => (acc << 8) + byte, 0);

console.log(ipToInt());                   // 2130706433
console.log(ipToInt('10.0.0.1'));         // 167772161
console.log(ipToInt('192.168.1.10'));     // -1062731510
console.log(ipToInt('165.225.133.150'));  // -1511946858
console.log(ipToInt('0.0.0.0'));          // 0
console.log(ipToInt('8.8.8.8'));          // 134744072 (це 0x08080808)
