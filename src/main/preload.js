const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  encodeBase64: (text) => ipcRenderer.invoke('encode-base64', text),
  decodeBase64: (text) => ipcRenderer.invoke('decode-base64', text),
  generateUuid: () => ipcRenderer.invoke('generate-uuid')
});