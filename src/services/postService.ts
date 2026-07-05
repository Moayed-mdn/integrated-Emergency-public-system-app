import { apiClient, ApiResponse } from '@/lib/api/client';
import { API_ENDPOINTS } from '@/lib/config/api';
import { AdminPost, NormalPost, Post } from '@/types';

interface PostsFilter {
  cities?: string[];
  governorates?: string[];
}

interface PostsResponse {
  posts: Post[];
}

export const postService = {
  /**
   * Get all posts (public, no auth required)
   */
  async getAllPosts(page: number = 1): Promise<ApiResponse<PostsResponse>> {
    return apiClient.get(`${API_ENDPOINTS.posts}?page=${page}`);
  },

  /**
   * Get admin posts
   */
  async getAdminPosts(): Promise<ApiResponse<{ data: AdminPost[] }>> {
    return apiClient.get(API_ENDPOINTS.adminPosts);
  },

  /**
   * Get normal posts with optional filter
   */
  async getNormalPosts(filter: PostsFilter): Promise<ApiResponse<{ data: NormalPost[] }>> {
    return apiClient.post(API_ENDPOINTS.normalPosts, filter);
  },

  /**
   * Get posts locations
   */
  async getPostsLocation(): Promise<ApiResponse<{ longitude: number; latitude: number }[]>> {
    return apiClient.get(API_ENDPOINTS.postsLocation);
  },
};
