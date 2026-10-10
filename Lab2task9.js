'use strict';
const phoneBook = [
    {name: 'Marcus Aurelius', phone: '+380445554433'},
    {name: 'Nero', phone: '+380441112233'},
    {name: 'Titus', phone: '+380443332211'},
];
function findPhoneByName(name){
    for (let i = 0; i < phoneBook.length; i++){
        if (phoneBook[i].name === name){
            return phoneBook[i].phone;
        }
    }
}
console.dir(findPhoneByName('Nero'));
