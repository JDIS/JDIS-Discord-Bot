/***
 * Author: Timothy Landry
 * Contributor:
 * Description: Simple ping function that answer with a pong message
 */

exports.run = (client, message, args) => {
    message.channel.send("pong!")
        .catch(console.error);
}