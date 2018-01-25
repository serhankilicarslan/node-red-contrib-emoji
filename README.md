## Node-red Emoji <img src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png" width="24">

[Emoji-Text Match](https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json)

----
### Emojify Usage
**Input msg.payload =** "I : heart: coffie!"<br>
**Output msg.payload =** "I <img src="https://assets-cdn.github.com/images/icons/emoji/unicode/2764.png" width="14"> coffie!"

### UnEmojify Usage
**Input msg.payload =** "I <img src="https://assets-cdn.github.com/images/icons/emoji/unicode/2764.png" width="14"> coffie!"<br>
**Output msg.payload =** "I : heart: coffie!"

----
### Dependencies
The nodes are a simple wrapper around the [node-emoji](https://github.com/omnidan/node-emoji)

### Support / Donations
If you want to support node-emoji development, please consider donating (it helps me keeping my projects active and alive!):
 - Bitcoin: 1EBqKuK5nQZn2QNDvN85KdYJC4D7Zc8Bgw