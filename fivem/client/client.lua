local tabletVisible = false

RegisterCommand("toggleTablet", function()
    tabletVisible = not tabletVisible
    TriggerEvent("showTablet", tabletVisible)
end, false)

RegisterKeyMapping("toggleTablet", "Afficher/Masquer la tablette", "keyboard", "F6")

AddEventHandler("showTablet", function(visible)
    if visible then
        SetNuiFocus(true, true)
        SendNUIMessage({ action = 'showTablet', visible = true })
    else
        SetNuiFocus(false, false)
        SendNUIMessage({ action = 'showTablet', visible = false })
    end
end)
