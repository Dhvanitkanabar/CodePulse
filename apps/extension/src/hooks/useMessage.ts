import { useEffect, useCallback } from 'react';

type MessageHandler = (message: unknown, sender: chrome.runtime.MessageSender) => void;

/**
 * Hook to listen for and send Chrome extension messages.
 */
export function useMessage(handler?: MessageHandler) {
  useEffect(() => {
    if (!handler) return;

    const listener = (message: unknown, sender: chrome.runtime.MessageSender) => {
      handler(message, sender);
    };

    chrome.runtime.onMessage.addListener(listener);
    return () => chrome.runtime.onMessage.removeListener(listener);
  }, [handler]);

  const sendMessage = useCallback(
    async <T = unknown>(message: unknown): Promise<T> => {
      return new Promise((resolve) => {
        chrome.runtime.sendMessage(message, (response: T) => {
          resolve(response);
        });
      });
    },
    [],
  );

  const sendTabMessage = useCallback(
    async <T = unknown>(tabId: number, message: unknown): Promise<T> => {
      return new Promise((resolve) => {
        chrome.tabs.sendMessage(tabId, message, (response: T) => {
          resolve(response);
        });
      });
    },
    [],
  );

  return { sendMessage, sendTabMessage };
}
