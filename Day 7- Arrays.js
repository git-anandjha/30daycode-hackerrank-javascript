'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    var temparr = ""
    // for(var i=n-1;i=>0;i--){
    //     temparr=temparr+" "+arr[i]
    // }   
    // console.log(temparr)
    var i = n - 1
    while (i != -1) {
        temparr += arr[i] + " "
        i--
    }
    console.log(temparr)

}
