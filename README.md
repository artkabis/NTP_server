# NTP-Sync

Application de synchronisation et d'analyse du temps entre client web et serveur NTP.

## 📋 Description

NTP-Sync est une application web permettant de :
- Mesurer la différence de temps entre un client web et un serveur NTP
- Calculer la latence réseau
- Analyser l'offset de temps entre le serveur local et le serveur NTP
- Visualiser les détails du protocole de synchronisation

## 🚀 Installation

### Prérequis

- Node.js (version 14.0.0 ou supérieure)
- npm (normalement installé avec Node.js)

### Étapes d'installation

1. Clonez le repository :
```bash
git clone [https://github.com/artkabis/NTP_server.git](https://github.com/artkabis/NTP_server.git)
cd NTP-server
```

2. Installez les dépendances :
```bash
npm install
```

## 💻 Utilisation

1. Démarrez le serveur :
```bash
node server.js
```

2. Ouvrez le fichier `client/index.html` dans votre navigateur web

3. Cliquez sur le bouton "Vérifier la synchronisation" pour obtenir les métriques de temps

## 📊 Métriques disponibles

L'application fournit les métriques suivantes :

- **Différence Client-NTP** : Écart de temps entre le client et le serveur NTP
- **Latence totale** : Temps total de communication aller-retour
- **Offset serveur-NTP** : Différence de temps entre le serveur local et le serveur NTP
- **Temps aller-retour** : Durée totale de la requête
- **Timestamps détaillés** :
  - Temps d'envoi client
  - Temps de réception serveur
  - Temps NTP
  - Temps de réception client

## 🛠 Architecture technique

### Serveur (server.js)
- Framework : Express.js
- Module NTP : ntp-client
- CORS activé pour les requêtes cross-origin

### Client (index.html)
- JavaScript vanilla
- Interface utilisateur simple et responsive
- Calculs de temps côté client

## 📝 Configuration

Le serveur utilise les paramètres par défaut suivants :

```javascript
const NTP_SERVER = 'pool.ntp.org';
const NTP_PORT = 123;
const SERVER_PORT = 3000;
```

Ces valeurs peuvent être modifiées dans le fichier `server.js`.

## 🔍 Détails du protocole

L'application implémente un protocole de synchronisation simplifié basé sur NTP :

1. Le client enregistre son temps local (T1)
2. Le serveur reçoit la requête et enregistre son temps (T2)
3. Le serveur interroge le serveur NTP
4. Le serveur calcule l'offset et renvoie les données
5. Le client reçoit la réponse et calcule la latence totale

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Soumettre des pull requests

## 📜 Licence

MIT License

## 🔗 Liens utiles

- [Documentation NTP](http://www.ntp.org/documentation.html)
- [Express.js](https://expressjs.com/)
- [ntp-client npm](https://www.npmjs.com/package/ntp-client)

## 📞 Support

Pour toute question ou problème, veuillez ouvrir une issue sur le repository.
