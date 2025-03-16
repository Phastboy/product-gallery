// Use Lynx's LocalPersistentStorage module
const storage = {
  setItem: (key: string, value: string) => {
    NativeModules.NativeLocalStorageModule.setStorageItem(key, value);
  },
  getItem: (key: string) => {
    return NativeModules.NativeLocalStorageModule.getStorageItem(key);
  },
  removeItem: () => {
    NativeModules.NativeLocalStorageModule.clearStorage();
  },
};

export const setItem = storage.setItem;
export const getItem = storage.getItem;
export const removeItem = storage.removeItem;
