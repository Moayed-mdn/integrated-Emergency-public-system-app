// User Types
export interface User {
  id: number;
  user_type: string;
  created_at: string;
  updated_at: string;
}

export interface KnownUser {
  id: number;
  user_id: number;
  official_identifier: string;
  official_identifier_method: string;
  first_name: string;
  last_name: string;
  email: string;
  is_verified: boolean;
  created_at: string;
  updated_at: string;
}

// Suggestion Types
export interface Suggestion {
  id: number;
  content: string;
  is_read_by_admin: boolean;
  created_at: string;
  updated_at: string;
}

// Location Types
export interface Region {
  id: number;
  created_at: string;
  updated_at: string;
}

export interface Governorate {
  id: number;
  name: string;
  region_id: number;
  created_at: string;
  updated_at: string;
}

export interface City {
  id: number;
  name: string;
  governorate_id: number;
  region_id: number;
  created_at: string;
  updated_at: string;
}

export interface Address {
  id: number;
  street: string;
  city_id: number;
  created_at: string;
  updated_at: string;
}

// News & Posts Types
export interface NewsType {
  id: number;
  type_name: string;
  post_visibility: 'direct' | 'ai' | 'never';
  created_at: string;
  updated_at: string;
}

export interface News {
  id: number;
  body: string;
  address_id: number;
  known_user_id: number;
  created_at: string;
  updated_at: string;
}

export interface Post {
  id: number;
  title?: string;
  news_id: number;
  by_admin: boolean;
  created_at: string;
  updated_at: string;
}

export interface Report {
  id: number;
  location: string;
  news_id: number;
  coordinates?: string;
  created_at: string;
  updated_at: string;
}

// Notification Types
export interface Notification {
  id: number;
  title: string;
  body: string;
  post_id: number;
  region_id: number;
  created_at: string;
  updated_at: string;
}

// Media Types
export interface Media {
  id: number;
  media_url: string;
  full_url: string;
  model_type: string;
  model_id: number;
  media_type_id: number;
  created_at: string;
  updated_at: string;
}

// Authority Types
export interface Authority {
  id: number;
  name: string;
  authority_type_id: number;
  created_at: string;
  updated_at: string;
}

// Awareness Article Types
export interface AwarenessArticle {
  id: number;
  title: string;
  body: string;
  icon_url: string;
  news_type: {
    id: number;
    name: string;
  };
  created_at: string;
  updated_at: string;
}

// Post Types
export interface BasePost {
  created_at: {
    date: string;
    time: string;
  };
  address: {
    street?: string;
    city: string;
    governorate?: string;
  };
  types: string[];
  media: string | null;
}

export interface AdminPost extends BasePost {
  title: string;
  body: string;
}

export interface NormalPost extends BasePost {
  location: {
    longitude: number;
    latitude: number;
  };
}

// Unified Post type (from public API)
export interface Post {
  id: number;
  by_admin: boolean;
  title?: string | null;
  body?: string | null;
  location: {
    longitude: number;
    latitude: number;
  } | null;
  created_at: {
    date: string;
    time: string;
  };
  address: {
    street?: string;
    city: string;
    governorate?: string;
  };
  types: string[];
  media: string | null;
}


