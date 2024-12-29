fx_version 'cerulean'
game 'gta5'

author 'Drasdyuk'
description 'Tablette LSPD'
version '1.0.0'

-- Spécifiez les scripts du client et du serveur
client_script '/app/fivem/client/client.lua'
-- server_script 'server/main.lua'

-- Si vous avez une interface utilisateur HTML
ui_page 'html/index.html'

-- Déclarez tous les fichiers nécessaires pour votre ressource
files {
    'app/public/tablet.html',
    'app/tablet/tablet.module.css',
    'app/public/tablet.js'
}
