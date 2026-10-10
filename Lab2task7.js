'use strict';
function fn(){
    const obj1 = {name: 'Marcus'};
    let obj2 = {name: 'Marcus'};
    obj1.name = 'Nero';
    obj2.name = 'Nero';
    obj2 = {name: 'Titus'};
    console.dir({obj1, obj2});
}
fn();
