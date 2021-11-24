const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const test = (input1, input2) => {
    if(input1 > 100) {
        console.log("condition1");
    }
    else {
        console.log("condition2");
    }

    if(input1%2 === 0 || input2%3 === 0 ) {
        console.log("condition3");
    } else {
        console.log("condition4");
    }
}

rl.question('Input data\n', data => {
    console.log(data);
    data = data.split(' ')
    data = data.map(item => item*1)
    test(data[0], data[1])
})
