export interface StoryType {
  id: string;
  title: string;
  body: string;
  thumbnail?: string;
  tags?: [string];
  created_at: string;
  updated_at?: string;
}

export interface MenuProps {
  title: string;
  url: string;
  items?: { id?: number; subTitle?: string; subUrl?: string }[];
}
