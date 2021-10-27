# Le bot Discord des Jeux et Défis informatiques de Sherbrooke (JDIS)

## Installation des dépendances

### Instructions Windows

- Installer Git (<https://git-scm.com/downloads/>)
- Installer Node.js (<https://nodejs.org/en/download/>)
- Faire les manipulations de la section ["Création d'une application de tests Discord"](#création-dune-application-de-tests-discord)
- Faire les manipulations de la section ["Installation locale"](#installation-locale)
- Aller dans le projet et faire la commande `node .`
- Une fois que le bot a démarré, aller dans Discord et écrire "!ping" au bot et il devrait vous répondre par "pong!"

### Instructions MacOS

- Installer Git (<https://git-scm.com/download/mac>)
- Installer Node.js (<https://nodejs.org/en/download/>)
- Faire les manipulations de la section ["Création d'une application de tests Discord"] et assurez-vous d'effectuer les commandes avec `sudo`.(#création-dune-application-de-tests-discord)
- Faire les manipulations de la section ["Installation locale"](#installation-locale)
- Aller dans le projet et faire la commande `node .`
- Une fois que le bot a démarré, aller dans Discord et écrire "!ping" au bot et il devrait vous répondre par "pong!"

* Installer Git (<https://git-scm.com/download/mac>)
* Installer Node.js (<https://nodejs.org/en/download/>)
* Faire les manipulations de la section ["Création d'une application de tests Discord"] et assurer vous d'effectuer les commandes avec `sudo`.(#création-dune-application-de-tests-discord)
* Faire les manipulations de la section ["Installation locale"](#installation-locale)
* Aller dans le projet et faire la commande `node .`
* Une fois que le bot a démarré, aller dans Discord et écrire "!ping" au bot et il devrait vous répondre par "pong!"

### Instructions Linux

## Création d'une application de tests Discord

Avant de soumettre un "pull request" (PR), il va bien falloir tester votre code. Pour cela, vous aurez besoin d'une instance de bot qui vous appartient. Pour des raisons évidentes, nous n'allons pas partager le token d'identification du bot JDIS, mais rien ne vous empêche de faire votre propre bot pour tester vos fonctionnalités dans un serveur qui vous appartient.
Comment faire me dîtes-vous? Suivez simplement ces quelques instructions:

Pour créer un bot, vous devez créer une application sur le site officiel de Discord à l'aide de votre compte.

Voici les étapes à suivre:

1. Aller sur <https://discord.com/developers/applications> et créer une application.
2. Sur la page de l'application, aller sur l'onglet Bot dans le menu contextuel de gauche.
3. Ajouter un bot.
4. Configurer le bot avec un nom et avatar qui vous plait, et copier le token dans le fichier [config.json](#config.json).
5. Pour inviter le bot dans votre serveur de tests, aller dans l'onglet OAuth2 du menu contextuel. Ensuite, choisissez l'option bot dans les scopes. Enfin, vous devrez donner les permissions nécéssaires au bot pour les fonctionnalités que vous voulez implémenter. Vous pouvez ensuite copier l'URL à l'écran dans un nouvel onglet et suivre les instructions données.

## Installation locale

1. Créer une copie ("fork") du répertoire JDIS.
2. Aller dans le dossier où vous voulez cloner le projet
3. Faire la commande "git clone <lien du projet cloné>"
4. Faire un `npm install` à la racine du projet pour installer les dépendences.
5. Créer le fichier config.json à la racine du projet avec la structure suivante:

```json
{
  "token": "Soit le token pour vous connecter au bot.",
  "prefix": "Soit le préfix des commandes.",
  "debug": true
}
```

---

## Exemples de code

Dans ces exemples, nous utilisons le module Discord.js.
Vous pouvez trouver la documentation sur le site suivant: <https://discord.js.org/>

## Commandes de base

Prenons la commande **ping**, définie dans le répertoire _examples_ et analysons cette dernière.

```javascript
exports.run = (client, message, args) => {
  message.channel.send("pong!").catch(console.error);
};
```

Nous recevons un client, le message, et une liste d'arguments. Nous utilisons ensuite l'objet message que nous avons reçu pour récupérer le channel courant et envoyer un message sur ce dernier. Finalement, on laisse un catch pour s'assurer de capturer une erreur et l'afficher en console dans le cas d'un retour invalide de l'API. (Par exemple channel.send() qui devient deprecated après une mise-à-jour.)

### Commande demandant des permissions

Certaines commandes vont demandées l'utilisation de permissions spécifiques, voici donc un exemple de safety net.

```javascript
if (!message.channel.permissionsFor(message.author).has("MANAGE_MESSAGES")) {
  message.channel.send(
    "Sorry, you don't have the permission to execute the command \"" +
      message.content +
      '"'
  );
  return;
} else if (
  !message.channel.permissionsFor(client.user).has("MANAGE_MESSAGES")
) {
  message.channel.send(
    "Sorry, I don't have the permission to execute the command \"" +
      message.content +
      '"'
  );
  return;
}
```

### Générer des faux events

Dans certains cas, vous allez devoir générer de faux événements pour tester votre code, voici un exemple simple sur comment faire.

```javascript
client.emit("guildMemberAdd", member);
```

Voici également une solution facile pour trouver l'objet membre de l'utilisateur qui a effectué la commande de test.

```javascript
const member = message.channel.members.filter(
  (user) => user.id === message.author.id
);
```

---

Mis-à-jour le 11/10/2021
