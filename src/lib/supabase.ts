import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface QuizResult {
  id?: string;
  user_name: string;
  score: number;
  total_questions: number;
  correct_answers: number;
  time_taken: number;
  created_at?: string;
}
