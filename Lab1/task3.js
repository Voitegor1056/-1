'use strict';
const Masyv = [true, 'hello', 5,
    12, -200, false,
    false, 'world',
    'word', true, 28,
    'you', 'Cube', 10,
    15, 13, 50, 2738,
    true, false
];
const Collection = {numbers: 0, strings: 0, booleans: 0};
for (const item of Masyv){
    const Type = typeof item;
    if (Type === 'number'){
        Collection.numbers += 1;
    } else if (Type === 'string'){
        Collection.strings += 1;
    } else if (Type === 'boolean'){
        Collection.booleans += 1;
    }
}
console.dir(Collection);
