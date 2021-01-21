const msg = "Lets meet at midnight under the c1ock";
const tokens = msg.split("")
let blocks = [];
let slice = 0;
const blockSize = 8;

while (slice < tokens.length) {
    blocks.push(tokens.slice(slice, slice += blockSize));
}

while (blocks[blocks.length - 1].length < 8) {
    blocks[blocks.length - 1].push("a")
}

blocks = blocks.map(block => block.map(char => char.charCodeAt()))

console.log(blocks)
/*
    Output
    [76, 101, 116, 115, 32, 109, 101, 101]
    [116, 32, 117, 110, 100, 101, 114, 32]
    [116, 104, 101, 32, 99, 108, 111, 99]
    [107, 32, 97, 116, 32, 109, 105, 100]
    [110, 105, 103, 104, 116, 46, 32, 82]
    [101, 109, 101, 109, 98, 101, 114, 32]
    [73, 32, 108, 111, 118, 101, 32, 121]
    [111, 117, 46, 97, 97, 97, 97, 97]
*/