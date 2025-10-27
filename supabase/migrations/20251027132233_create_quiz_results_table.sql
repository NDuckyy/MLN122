/*
  # Create quiz results table

  1. New Tables
    - `quiz_results`
      - `id` (uuid, primary key) - Unique identifier for each quiz attempt
      - `user_name` (text) - Name of the person taking the quiz
      - `score` (integer) - Score achieved (0-100)
      - `total_questions` (integer) - Total number of questions
      - `correct_answers` (integer) - Number of correct answers
      - `time_taken` (integer) - Time taken in seconds
      - `created_at` (timestamptz) - When the quiz was completed
  
  2. Security
    - Enable RLS on `quiz_results` table
    - Add policy for anyone to insert their results
    - Add policy for anyone to read all results (for leaderboard)
*/

CREATE TABLE IF NOT EXISTS quiz_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_name text NOT NULL,
  score integer NOT NULL DEFAULT 0,
  total_questions integer NOT NULL,
  correct_answers integer NOT NULL,
  time_taken integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert quiz results"
  ON quiz_results
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can read quiz results"
  ON quiz_results
  FOR SELECT
  TO anon
  USING (true);