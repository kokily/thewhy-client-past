export interface StoryType {
  id: string;
  title: string;
  body: string;
  thumbnail?: string;
  tags?: [string];
  created_at: string;
  updated_at?: string;
}
