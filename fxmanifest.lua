fx_version 'cerulean'
game 'gta5'

author 'Votre Nom'
description 'Tablette LSPD pour FiveM avec interface Next.js et Tailwind CSS'
version '1.0.0'

client_script 'client.lua'
server_script 'server.lua'

ui_page 'dist/index.html'

files {
    'dist/index.html',
    'dist/**/*'
}