import { useState, useEffect } from 'react';

interface TabInfo {
  id?: number;
  url?: string;
  title?: string;
  favIconUrl?: string;
}

/**
 * Hook to get current active tab info.
 */
export function useTab() {
  const [tab, setTab] = useState<TabInfo>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        setTab({
          id: tabs[0].id,
          url: tabs[0].url,
          title: tabs[0].title,
          favIconUrl: tabs[0].favIconUrl,
        });
      }
      setLoading(false);
    });
  }, []);

  return { tab, loading };
}
