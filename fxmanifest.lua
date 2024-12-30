fx_version 'cerulean'
game 'gta5'

name 'fivem-next-app'
description 'Application Next.js pour FiveM'
author 'TonNom'
version '1.0.0'

-- Dossier contenant les fichiers générés de Next.js
files {
  'out/**'  -- Utilise le dossier de build si tu as généré des pages statiques.
}

-- Le script qui lance le serveur Next.js
server_script 'server.ts'  -- Serveur Node.js qui gère Next.js

-- Script client pour intégrer l'interface web dans FiveM
client_script 'client.lua'  -- (facultatif, pour interagir avec l'interface web dans FiveM)
