# Le bot discord des Jeux et Défis informatiques de Sherbrooke

## Guide des contributeurs
## Table des matières  
#### Installation
- ##### [Installation des dépendances](#installation_des_dependances)
- ##### [Création de l'application de test](#créer_application_de_test_discord)
- ##### [Installation Locale](#installation_locale)

#### Exemples de code
- ##### [Commande de base](#command_de_base)
---
### Installation des dépendances
##### Instructions Windows 10
- Installer Git sur votre machine si ce n'est pas déjà fait. (<https://git-scm.com/downloads/>)
- Installer Python sur votre machine si ce n'est pas déjà fait. (<https://www.python.org/downloads/>)
- Après l'installation de Python, réexecuter l'exe et aller dans Modify->Next et cocher Add Python to environment variables
- Installer NodeJS sur votre machine si ce n'est pas déjà fait. (<https://nodejs.org/en/download/>)
- Faire les manipulations de la section "Création d'une application de test Discord"
- Faire les manipulations de la section "Installation Locale"
- Dans cmd, aller dans le projet et faites ``node .``
- Le bot devrait démarer
- Aller dans Discord et écrire "!ping" au bot et il devrait vous répondre par "pong!"
- Voilà!

##### Instructions MacOS

##### Instructions Linux


### Création d'une application de test Discord
Avant de soumettre une pullrequest, il va bien falloir tester votre code. Pour cela, vous allez avoir besoin d'une instance de bot qui vous appartient. Pour des raisons évidentes, nous n'allons pas partager le token d'identification du bot JDIS, mais rien ne vous empêche de faire votre propre bot pour tester vos features dans un serveur qui vous appartient.
Comment faire me dîtes-vous? Suivez simplement ces quelques instructions:

Pour créer un bot, vous devez créer une application sur le site officiel de discord à l'aide de votre compte.
Voici les étapes à suivre:
1. Aller sur <https://discord.com/developers/applications> et créer une application.
2. Sur la page de l'application, aller sur l'onglet Bot dans le menu contextuel de gauche.
3. Ajouter un bot.
4. Configurer le bot avec un nom et avatar qui vous plait, et copier le token dans le fichier [config.json](#config.json).
5. Pour inviter le bot dans votre serveur de test, allez dans l'onglet OAuth2 du menu contextuel. Ensuite, choisisser l'option bot dans les scopes. Enfin, donner les permissions nécéssaires au bot pour les fonctionnalités que vous voulez implémenter. Copier ensuite l'URL à l'écran dans un nouvel onglet et suivre les instructions données.


### Installation Locale
1. Créer une fork du repertoire JDIS.
2. En command line, aller dans le folder où vous voulez cloner le projet
3. Faite la commande "git clone <le lien de votre projet forké que vous pouvez récuper avec le bouton vert Code>"
4. Faire un ``npm install`` à la racine du projet pour installer les dépendences.
5. Créer le fichier config.json à la racine du projet avec la structure suivante:
```json
{
    "token": "Soit le token pour vous connecter au bot.",
    "prefix": "Soit le préfix des commandes.",
    "debug": true
}
```

---
### Exemples de code
Dans ces exemples, nous utilisons le module Discord.js. 
Vous pouvez trouver la documentation sur le site suivant: <https://discord.js.org/>

#### Commande de base
Prenons la commande **ping**, définie dans le répertoire *examples* et analysons cette dernière.
```javascript
exports.run = (client, message, args) => {
    message.channel.send("pong!")
        .catch(console.error);
}
```
Nous recevons un client, le message, et une liste d'arguments. Nous utilisons ensuite l'objet message que nous avons reçu pour récupérer le channel courant et envoyer un message sur ce dernier. Finalement, on laisse un catch pour s'assurer de capturer une erreur et l'afficher en console dans le cas d'un retour invalide de l'API. (Par exemple channel.send() qui devient deprecated après une mise-à-jour.)

#### Commande demandant des permissions
Certaines commandes vont demandé l'utilisation de permissions spécifiques, voici donc un exemple de safety net.
```javascript
    if (!message.channel.permissionsFor(message.author).has("MANAGE_MESSAGES")) 
    {
        message.channel.send("Sorry, you don't have the permission to execute the command \"" + message.content + "\"");
        return;
    } 
    else if (!message.channel.permissionsFor(client.user).has("MANAGE_MESSAGES")) {
        message.channel.send("Sorry, I don't have the permission to execute the command \"" + message.content + "\"");
        return;
    }
```

#### Generer des faux events
Dans certains cas, vous allez devoir generer de faux évènements pour tester votre code, voici un exemple simple sur comment faire.
```javascript
client.emit('guildMemberAdd', member);
```
Voici également une solution facile pour trouver le l'objet membre de l'utilisateur qui effectué la commande de test.
```javascript
const member = message.channel.members.filter(user => user.id === message.author.id);
```

---
Updated 03/10/2020
