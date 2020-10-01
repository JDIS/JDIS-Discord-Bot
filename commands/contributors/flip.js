exports.run = (client, message, args) => {
    //Envoie l'image gif qui flip un coin et la supprime apres 2.1 sec
    if(client.config.debug === true)
        message.channel.send({files: [client.config.images_Local.flip_coinGif]}).then(d_msg => d_msg.delete({timeout:2100}));
    else
        message.channel.send({files: [client.config.images_Git.flip_coinGif]}).then(d_msg => d_msg.delete({timeout:2100}));

    //envoie l'image du resultat 2.5 seconde apres le lancement de la commande
    setTimeout(function(){   
        if (Math.floor(Math.random()*2)==0)//génère un nombre random entre 0 et 1 et vérifie quel est le résultat
        {
            if(client.config.debug === true)
                message.channel.send({files: [client.config.images_Local.coin_pile]});
            else
                message.channel.send({files: [client.config.images_Git.coin_pile]});
        }else
        {
            if(client.config.debug === true)
                message.channel.send({files: [client.config.images_Local.coin_face]});
            else
                message.channel.send({files: [client.config.images_Git.coin_face]});
        }
    }, 2500);
};
