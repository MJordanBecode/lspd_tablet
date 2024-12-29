'use client'

import { useState, useEffect } from 'react'

export default function LSPDTablet() {
  const [playerName, setPlayerName] = useState('')
  const [wantedReason, setWantedReason] = useState('')
  const [wantedList, setWantedList] = useState<string[]>([])

  useEffect(() => {
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const handleMessage = (event: MessageEvent) => {
    if (event.data.type === 'updateWantedList') {
      setWantedList(event.data.wantedList)
    }
  }

  const addWanted = () => {
    if (playerName && wantedReason) {
      fetch('https://lspd-tablet/addWanted', {
        method: 'POST',
        body: JSON.stringify({ name: playerName, reason: wantedReason })
      })
      setPlayerName('')
      setWantedReason('')
    }
  }

  const closeTablet = () => {
    fetch('https://lspd-tablet/closeTablet', { method: 'POST' })
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-4">Tablette LSPD</div>
          <div className="space-y-4">
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              placeholder="Nom du joueur"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              placeholder="Raison du mandat"
              value={wantedReason}
              onChange={(e) => setWantedReason(e.target.value)}
            />
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={addWanted}
            >
              Ajouter aux recherchés
            </button>
            <div>
              <h3 className="font-bold text-lg mb-2">Liste des recherchés :</h3>
              <ul className="list-disc list-inside">
                {wantedList.map((wanted, index) => (
                  <li key={index}>{wanted}</li>
                ))}
              </ul>
            </div>
            <button
              className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={closeTablet}
            >
              Fermer la tablette
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

