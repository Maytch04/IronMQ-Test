// IronMQ usage example
var iron_mq = require('iron_mq');

var imq = new iron_mq.Client();


// creating new pull queue
/*var options = {
    'message_timeout': 120,
    'message_expiration': 24 * 3600,
};*/

var queue_name = "Myne";

//imq.create_queue(queue_name, options, function(error, body) {});

var queue = imq.queue(queue_name);

// posting single message
queue.post("Why wont u work", function(error, body) {});
console.log( "message" );
queue.reserve({"n":10}, function(error, body) {});