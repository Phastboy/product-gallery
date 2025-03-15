// Use Lynx's LocalPersistentStorage module
const storage = {
  setItem: async (key: string, value: string) => {
    await LocalPersistentStorage.setItem(key, value);
  },
  getItem: async (key: string) => {
    return await LocalPersistentStorage.getItem(key);
  },
  removeItem: async (key: string) => {
    await LocalPersistentStorage.removeItem(key);
  },
};

export const setItem = storage.setItem;
export const getItem = storage.getItem;
export const removeItem = storage.removeItem;
