const cluster = require('cluster');

function hi() {
  console.log("hi");
}

if (cluster.isMaster) {
	  let i = 0;
		cluster.fork().send({
			"somemsg": "Hello World"
		});
		i++;
		console.log(`start thread : ${i}`);
    hi();
} else {
    process.on('message', function(message) {
      console.log(message.somemsg);
      hi();
    });
}
