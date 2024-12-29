// app/tablet/Tablet.tsx
'use client'; // Important pour l'exécution côté client

import React, { useState, useEffect } from 'react';

const Tablet: React.FC = () => {
  const [isTabletVisible, setTabletVisible] = useState(false);

  // Écouter les messages NUI venant de FiveM
  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (event.data.action === 'showTablet') {
        setTabletVisible(event.data.visible); // Mettre à jour l'état de visibilité
      }
    });

    return () => {
      window.removeEventListener('message', () => {});
    };
  }, []);

  return (
    <>
      {isTabletVisible && (
        <div style={tabletStyle}>
          <h1>Bienvenue sur la tablette</h1>
          <p>Voici votre interface utilisateur avec Next.js et React !</p>
        </div>
      )}
    </>
  );
};

const tabletStyle: React.CSSProperties = {
  position: 'fixed',
  top: '10%',
  left: '10%',
  width: '80%',
  height: '80%',
  backgroundColor: 'white',
  boxShadow: '0 0 10px rgba(0,0,0,0.5)',
  zIndex: 9999,
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Tablet;
