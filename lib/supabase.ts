// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Client-side Supabase client (with RLS)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side Supabase client (bypasses RLS)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

// Database types
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          clerk_id: string;
          email: string;
          role: 'client' | 'admin';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          clerk_id: string;
          email: string;
          role?: 'client' | 'admin';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          clerk_id?: string;
          email?: string;
          role?: 'client' | 'admin';
          created_at?: string;
          updated_at?: string;
        };
      };
      tasks: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          file_url: string;
          file_type: 'text' | 'image' | 'audio';
          status: 'pending' | 'processing' | 'completed' | 'failed';
          price_per_unit: number;
          total_units: number;
          total_price: number;
          pricing_reasoning: string;
          instant_annotation_enabled: boolean;
          auto_approved_count: number;
          manual_review_count: number;
          processing_time_ms: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          file_url: string;
          file_type: 'text' | 'image' | 'audio';
          status?: 'pending' | 'processing' | 'completed' | 'failed';
          price_per_unit: number;
          total_units: number;
          total_price: number;
          pricing_reasoning: string;
          instant_annotation_enabled?: boolean;
          auto_approved_count?: number;
          manual_review_count?: number;
          processing_time_ms?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          title?: string;
          file_url?: string;
          file_type?: 'text' | 'image' | 'audio';
          status?: 'pending' | 'processing' | 'completed' | 'failed';
          price_per_unit?: number;
          total_units?: number;
          total_price?: number;
          pricing_reasoning?: string;
          instant_annotation_enabled?: boolean;
          auto_approved_count?: number;
          manual_review_count?: number;
          processing_time_ms?: number | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      annotations: {
        Row: {
          id: string;
          task_id: string;
          annotation_data: any;
          confidence_score: number;
          decision_type: 'auto_approved' | 'ai_assisted' | 'manual_review';
          ai_provider: 'openai' | 'anthropic' | 'hybrid' | null;
          ai_validated: boolean;
          execution_time_ms: number;
          status: 'pending' | 'approved' | 'rejected' | 'completed';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          task_id: string;
          annotation_data: any;
          confidence_score: number;
          decision_type: 'auto_approved' | 'ai_assisted' | 'manual_review';
          ai_provider?: 'openai' | 'anthropic' | 'hybrid' | null;
          ai_validated?: boolean;
          execution_time_ms: number;
          status?: 'pending' | 'approved' | 'rejected' | 'completed';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          task_id?: string;
          annotation_data?: any;
          confidence_score?: number;
          decision_type?: 'auto_approved' | 'ai_assisted' | 'manual_review';
          ai_provider?: 'openai' | 'anthropic' | 'hybrid' | null;
          ai_validated?: boolean;
          execution_time_ms?: number;
          status?: 'pending' | 'approved' | 'rejected' | 'completed';
          created_at?: string;
          updated_at?: string;
        };
      };
      payments: {
        Row: {
          id: string;
          task_id: string;
          user_id: string;
          stripe_payment_intent_id: string;
          stripe_checkout_session_id: string | null;
          amount: number;
          currency: string;
          status: 'pending' | 'succeeded' | 'failed' | 'refunded';
          payment_method: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          task_id: string;
          user_id: string;
          stripe_payment_intent_id: string;
          stripe_checkout_session_id?: string | null;
          amount: number;
          currency?: string;
          status?: 'pending' | 'succeeded' | 'failed' | 'refunded';
          payment_method?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          task_id?: string;
          user_id?: string;
          stripe_payment_intent_id?: string;
          stripe_checkout_session_id?: string | null;
          amount?: number;
          currency?: string;
          status?: 'pending' | 'succeeded' | 'failed' | 'refunded';
          payment_method?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      admin_reports: {
        Row: {
          id: string;
          type: 'daily' | 'weekly' | 'monthly' | 'custom';
          period_start: string;
          period_end: string;
          content: any;
          summary: string;
          generated_by: string;
          tokens_used: number;
          cost_gbp: number;
          generated_at: string;
        };
        Insert: {
          id?: string;
          type: 'daily' | 'weekly' | 'monthly' | 'custom';
          period_start: string;
          period_end: string;
          content: any;
          summary: string;
          generated_by?: string;
          tokens_used: number;
          cost_gbp: number;
          generated_at?: string;
        };
        Update: {
          id?: string;
          type?: 'daily' | 'weekly' | 'monthly' | 'custom';
          period_start?: string;
          period_end?: string;
          content?: any;
          summary?: string;
          generated_by?: string;
          tokens_used?: number;
          cost_gbp?: number;
          generated_at?: string;
        };
      };
      ai_costs: {
        Row: {
          id: string;
          operation: string;
          provider: 'openai' | 'anthropic';
          model: string;
          tokens_input: number;
          tokens_output: number;
          tokens_cached: number;
          cost_gbp: number;
          task_id: string | null;
          user_id: string | null;
          timestamp: string;
        };
        Insert: {
          id?: string;
          operation: string;
          provider: 'openai' | 'anthropic';
          model: string;
          tokens_input: number;
          tokens_output: number;
          tokens_cached?: number;
          cost_gbp: number;
          task_id?: string | null;
          user_id?: string | null;
          timestamp?: string;
        };
        Update: {
          id?: string;
          operation?: string;
          provider?: 'openai' | 'anthropic';
          model?: string;
          tokens_input?: number;
          tokens_output?: number;
          tokens_cached?: number;
          cost_gbp?: number;
          task_id?: string | null;
          user_id?: string | null;
          timestamp?: string;
        };
      };
    };
  };
}
