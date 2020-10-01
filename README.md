# Le bot discord des Jeux et Défis informatiques de Sherbrooke

## Guide des contributeurs

## Comment commencer à développer (Instuctions Windows 10)
1. Dans github, cliquer sur fork.
1. Installer git (https://git-scm.com/downloads)
2. Installer Python (https://www.python.org/downloads/)
3. Après l'installation, réexecuter l'exe et aller dans Modify->Next et cocher Add Python to environment variables
2. Dans l'application cmd, aller dans le folder où vous voulez cloner le projet
3. faite la commande "git clone <le lien de votre projet forké que vous pouvez récuper avec le bouton vert Code>"
4. Installer la version Current de Node.js (https://nodejs.org/en/download/)
5. Dans cmd, aller dans le dossier que vous avez précédemment cloné
7. Faire la commande "npm install discord.js --save"
8. Aller sur ce site (https://discord.com/login?redirect_to=%2Fdevelopers%2Fapplications)
9. Se connecter avec son compte Discord
10. Faire New Application et entrer un nom
11. Dans l'onglet Bot, faire Add Bot
12. Cliquer sur "Click to Reveal Token" sur la page de votre bot
13. Copier le token
14. Créer un fichier config.json qui ressemble avec un contenu ressemblant à ceci:

{
	"token": "<Coller votre token ici>",
	"prefix": "!"
}
15. Dans "General information" de votre bot, copier le client ID.
16. Aller sur ce site (https://discordapi.com/permissions.html)
17. Cocher Administrator et copier votre client ID
18. Cliquer sur le link
19. Ajouter le bot à un serveur (créé au préalable par vous)
20. Dans cmd, aller dans le projet et faites "node ."
21. Le bot devrait démarer
22. Aller dans Discord et écrire "!ping" au bot et il devrait vous répondre par "pong!"
23. Voilà!

## Features désirés
Acceuillir les nouveaux membres au discord.

Jouer de la musique.

Poster des memes.

Basher sur le monde qui parlent de stéganographie. La steg c'est non.

