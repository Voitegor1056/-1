'use strict';
function createKeys(Elements, Result){
    for (const item of Elements){
        const Type = typeof item;
        if (Type === 'number'){
            Result.numbers = 0;
        } else if (Type === 'string'){
            Result.strings = 0;
        } else if (Type === 'boolean'){
            Result.booleans = 0;
        }
    }
}
function check(Elements, Result){
    for (const item of Elements){
        const Type = typeof item;
        if (Type === 'number'){
            Result.numbers += 1;
        } else if (Type === 'string'){
            Result.strings += 1;
        } else if (Type === 'boolean'){
            Result.booleans += 1;
        }
    }
    console.dir(Result);
}
const Collection = {};
const Collection2 = {};
const Masyv2 = [true, false, true];
const Masyv = [true, 'hello', 5,
    12, -200, false,
    false, 'world',
    'word', true, 28,
    'you', 'Cube', 10,
    15, 13, 50, 2738,
    true, false
];
createKeys(Masyv, Collection);
createKeys(Masyv2, Collection2);
check(Masyv, Collection);
check(Masyv2, Collection2);
