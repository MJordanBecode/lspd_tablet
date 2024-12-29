local tabletVisible = false
local wantedList = {}

function ToggleTablet()
    tabletVisible = not tabletVisible
    SetNuiFocus(tabletVisible, tabletVisible)
    SendNUIMessage({
        type = "toggleTablet",
        status = tabletVisible
    })
    if tabletVisible then
        SendNUIMessage({
            type = "updateWantedList",
            wantedList = wantedList
        })
    end
end

-- Associer la touche F6 à l'ouverture/fermeture de la tablette
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        if IsControlJustReleased(0, 167) then -- 167 est le code pour F6
            ToggleTablet()
        end
    end
end)

RegisterNUICallback("addWanted", function(data, cb)
    table.insert(wantedList, data.name .. " - " .. data.reason)
    TriggerServerEvent("lspd:updateWantedList", wantedList)
    cb('ok')
end)

RegisterNUICallback("closeTablet", function(data, cb)
    ToggleTablet()
    cb('ok')
end)

RegisterNetEvent("lspd:syncWantedList")
AddEventHandler("lspd:syncWantedList", function(newList)
    wantedList = newList
    if tabletVisible then
        SendNUIMessage({
            type = "updateWantedList",
            wantedList = wantedList
        })
    end
end)