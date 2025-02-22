// server.js
const express = require('express');
const ntpClient = require('ntp-client');
const cors = require('cors');

const app = express();
app.use(cors());

// Configuration du serveur NTP par défaut
const NTP_SERVER = 'pool.ntp.org';
const NTP_PORT = 123;

app.get('/time', async (req, res) => {
    const clientTime = parseInt(req.query.clientTime);
    
    ntpClient.getNetworkTime(NTP_SERVER, NTP_PORT, (err, date) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erreur lors de la récupération du temps NTP' });
        }

        const serverReceiveTime = Date.now();
        const ntpTime = date.getTime();
        
        // Calcul des métriques
        const offset = ntpTime - serverReceiveTime;
        const roundTripDelay = serverReceiveTime - clientTime;
        const clientOffset = ntpTime - clientTime - (roundTripDelay / 2);

        res.json({
            ntpTime,
            serverReceiveTime,
            clientTime,
            metrics: {
                offset,                // Différence entre NTP et serveur
                roundTripDelay,        // Temps total de l'aller-retour
                clientOffset,          // Différence estimée entre client et NTP
            }
        });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});