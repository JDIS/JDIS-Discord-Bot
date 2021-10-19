/***
 * Author: Timothy Landry
 * Contributor: 
 * Description: Function that execute when bot is ready.
 */

module.exports = (client) => {
    client.user.setActivity('>help', { type: 'LISTENING' });
    console.log("[event:ready.js] Bot is online");
};