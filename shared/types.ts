export interface User {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Campaign {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  start_date: string;
  end_date: string;
  budget: number;
  status: 'active' | 'paused' | 'completed';
  created_at: string;
  updated_at: string;
}

export interface MediaChannel {
  id: string;
  name: string;
  type: 'tv' | 'radio' | 'digital' | 'print' | 'outdoor' | 'social';
  description?: string;
}

export interface MediaSpend {
  id: string;
  campaign_id: string;
  channel_id: string;
  date: string;
  spend: number;
  impressions?: number;
  clicks?: number;
  conversions?: number;
  created_at: string;
}

export interface MMModelResult {
  id: string;
  campaign_id: string;
  model_type: 'adstock' | 'saturation' | 'base_media';
  parameters: Record<string, any>;
  results: {
    attribution: Record<string, number>;
    roi: Record<string, number>;
    contribution: Record<string, number>;
  };
  created_at: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}