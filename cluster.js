const cluster = require('cluster');

function hi() {
    console.log("hi");
}

if (cluster.isMaster) {
    let i = 5;
    while (i--) {
        cluster.fork().send({
            "somemsg": "Hello World" // only string and integer
        });
    }
    hi();
} else {
    process.on('message', function (message) {
        console.log(message.somemsg);
        hi();
    });
}
