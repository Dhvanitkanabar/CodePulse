/**
 * API client hook stub.
 * TODO: Integrate with TanStack Query for data fetching.
 */

const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:4000/api';

interface FetchOptions {
  method?: string;
  body?: unknown;
}

export function useApi() {
  const fetchApi = async <T>(endpoint: string, options: FetchOptions = {}): Promise<T> => {
    const { method = 'GET', body } = options;

    const response = await fetch(`${API_BASE}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json() as Promise<T>;
  };

  return { fetchApi };
}
