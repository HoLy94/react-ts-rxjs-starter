export type LocalStorageServiceType = {
  setItem(key: string, value: string): void;
  getItem(key: string): string | null;
  removeItem(key: string): void;
  clear(): void;
};

export const createLocalStorageService = (): LocalStorageServiceType => {
  return {
    setItem: (key, value) => {
      localStorage.setItem(key, value);
    },
    getItem: (key) => localStorage.getItem(key),
    removeItem: (key) => localStorage.removeItem(key),
    clear: () => localStorage.clear(),
  };
};

export default createLocalStorageService();
