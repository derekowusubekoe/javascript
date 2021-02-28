let sum = function (num)
{
    let type = typeof num;
    console.log(type);
    return num + 10;
};
console.log('xxxxxxxx');

let example1 = sum(true);
console.log(example1);

console.log('xxxxxxxx');

let namePlus10 = sum('Derek ');
console.log(namePlus10);


