// API Configuration
export const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
  timeout: 30000,
};

export const API_ENDPOINTS = {
  // Auth
  login: '/login',
  register: '/register',
  logout: '/logout',
  sendOtp: '/otp/send',
  verifyOtp: '/otp/verify',
  refresh: '/refresh',
  
  // Reports
  reports: '/reports',
  
  // Posts
  normalPosts: '/posts/normal',
  adminPosts: '/posts/admin',
  postsLocation: '/posts/location',
  
  // Awareness
  awarenessArticles: '/awareness-articles',
  
  // Posts
  posts: '/posts',
  adminPosts: '/posts/admin',
  normalPosts: '/posts/normal',
  postsLocation: '/posts/location',
};
