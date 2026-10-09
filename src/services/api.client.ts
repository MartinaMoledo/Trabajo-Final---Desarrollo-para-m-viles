import * as SecureStore from 'expo-secure-store';

// URL base de la API 
const API_BASE_URL = 'https://api.colon.tur.ar/v1';

interface RequestOptions extends RequestInit {
  requiresAuth?: boolean;
}

export async function apiClient<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { requiresAuth = false, headers = {}, ...customOptions } = options;

  const finalHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(headers as Record<string, string>),
  };

  if (requiresAuth) {
    const token = await SecureStore.getItemAsync('user_token');
    if (token) {
      finalHeaders['Authorization'] = `Bearer ${token}`;
    }
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: finalHeaders,
      ...customOptions,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.mensaje || 'Error en la petición.');
    }

    return data as T;
  } catch (error) {
    console.warn(`[apiClient] Error en ${endpoint}:`, error);
    throw error;
  }
}