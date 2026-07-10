// ========================
// Storage Utilities
// ========================

/**
 * Safely get an item from localStorage.
 */
export const getStorageItem = <T>(key: string, fallback: T): T => {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : fallback;
  } catch {
    return fallback;
  }
};

/**
 * Safely set an item in localStorage.
 */
export const setStorageItem = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    console.error(`Failed to set storage item: ${key}`);
  }
};

/**
 * Remove an item from localStorage.
 */
export const removeStorageItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch {
    console.error(`Failed to remove storage item: ${key}`);
  }
};

/**
 * Clear all items from localStorage.
 */
export const clearStorage = (): void => {
  try {
    localStorage.clear();
  } catch {
    console.error('Failed to clear storage');
  }
};
