/***
 * Author: Timothy Landry
 * Contributor: Michael Labrecque [micklabrecque@hotmail.com]
 * Description: Analyze every message and send message if st[eé]g string is found, return noting if 
 *      the command prefix isn't there and execute the correct command if the prefix is present in the 
 *      message.
 */

module.exports = (client, message) => {
    if (message.author.bot) return;

    if (message.content.toLowerCase().indexOf("steg")!==-1 || message.content.toLowerCase().indexOf("stég")!==-1)
    {
        message.reply({content:":man_gesturing_no_tone1::rage: **La Steg c'est non!** :rage::man_gesturing_no_tone1: "});
    }
};