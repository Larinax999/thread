const { fork } = require("child_process");
let count = 10;
while (count--) {
    fork("./test.js");
}
