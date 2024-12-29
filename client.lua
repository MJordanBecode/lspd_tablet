RegisterCommand('openNextJs', function()
    -- Ouvre l'application Next.js en localhost dans le navigateur intégré de FiveM
    SetNuiFocus(true, true)  -- Donne le focus au NUI (ici votre Next.js)
    SendNUIMessage({
        action = 'open',
        url = 'http://localhost:3000'  -- L'URL de votre app Next.js en localhost
    })
end, false)

RegisterNUICallback('closeNextJs', function(data, cb)
    -- Ferme le NUI
    SetNuiFocus(false, false)
    cb('ok')
end)
