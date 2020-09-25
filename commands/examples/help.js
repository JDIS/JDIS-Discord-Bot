exports.run = (client, message, args) => {
    message.channel.send(">help is currently not available.")
        .catch(console.error);
}