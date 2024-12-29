// app/types/nui.d.ts
declare global {
    interface Window {
      SendNUIMessage: (message: { action: string; visible: boolean }) => void;
      addEventListener: (event: string, callback: (event: any) => void) => void;
    }
  }
  