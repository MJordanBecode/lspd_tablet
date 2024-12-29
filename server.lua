local wantedList = {}

RegisterServerEvent("lspd:updateWantedList")
AddEventHandler("lspd:updateWantedList", function(newList)
    wantedList = newList
    TriggerClientEvent("lspd:syncWantedList", -1, wantedList)
end)