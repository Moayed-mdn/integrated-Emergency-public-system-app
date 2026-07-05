import { apiClient, ApiResponse } from '@/lib/api/client';
import { API_ENDPOINTS } from '@/lib/config/api';

export interface Suggestion {
  id: number;
  content: string;
  is_read_by_admin: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateSuggestionData {
  content: string;
}

export const suggestionService = {
  /**
   * Create a new suggestion
   */
  async create(data: CreateSuggestionData): Promise<ApiResponse<{ suggestion: Suggestion }>> {
    return apiClient.post(API_ENDPOINTS.suggestions, data);
  },

  /**
   * Get all suggestions (admin only)
   */
  async getAll(): Promise<ApiResponse<{ suggestions: Suggestion[] }>> {
    return apiClient.get(API_ENDPOINTS.suggestions);
  },

  /**
   * Get a specific suggestion by ID
   */
  async getById(id: number): Promise<ApiResponse<{ suggestion: Suggestion }>> {
    return apiClient.get(`${API_ENDPOINTS.suggestions}/${id}`);
  },
};
