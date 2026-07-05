import { apiClient, ApiResponse } from '@/lib/api/client';
import { API_ENDPOINTS } from '@/lib/config/api';
import { AwarenessArticle } from '@/types';

export const awarenessService = {
  /**
   * Get all awareness articles
   */
  async getAll(): Promise<ApiResponse<{ articles: AwarenessArticle[] }>> {
    return apiClient.get(API_ENDPOINTS.awarenessArticles);
  },

  /**
   * Get awareness articles by news type
   */
  async getByType(newsTypeId: number): Promise<ApiResponse<{ articles: AwarenessArticle[] }>> {
    return apiClient.get(`${API_ENDPOINTS.awarenessArticles}?news_type_id=${newsTypeId}`);
  },

  /**
   * Get a specific awareness article by ID
   */
  async getById(id: number): Promise<ApiResponse<{ article: AwarenessArticle }>> {
    return apiClient.get(`${API_ENDPOINTS.awarenessArticles}/${id}`);
  },
};
