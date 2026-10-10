'use strict';
const hash = {
    'Marcus Aurelius': '+380445554433',
    'Nero': '+380441112233',
    'Titus': '+380443332211',
};
function findPhoneByName(name){
    return hash[name];
}
console.dir(findPhoneByName('Nero'));
