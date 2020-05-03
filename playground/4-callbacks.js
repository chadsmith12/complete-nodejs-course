setTimeout(() =>  {
    console.log("three seconds are up");
}, 3000);
const filterShortNames = (name) => {
    return name.length <= 4;
}
const names = ['Chad', 'Jenn', 'Jess'];
const shortNames = names.filter(filterShortNames)

console.log(shortNames);

const add = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1 + num2);
    }, 2000);
}

add(1, 2, (sum) => {
    console.log(sum);
})