module.exports = function(RED) {
	var nodeEmoji = require('node-emoji')

    function Emojify(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = nodeEmoji.emojify(msg.payload);
            node.send(msg);
        });
    }


    RED.nodes.registerType("emojify",Emojify);

}