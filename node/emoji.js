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


    function UnEmojify(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = nodeEmoji.unemojify(msg.payload);
            node.send(msg);
        });
    }


    RED.nodes.registerType("UnEmojify",UnEmojify);
    RED.nodes.registerType("Emojify",Emojify);

}