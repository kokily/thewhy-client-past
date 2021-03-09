export interface StoryType {
  id: string;
  title: string;
  body: string;
  thumbnail?: string;
  tags?: [string];
  created_at: string;
  updated_at?: string;
}

export interface NoticeType {
  id: string;
  num: number;
  title: string;
  body: string;
  created_at: string;
  updated_at?: string;
}

export interface MeType {
  adminId: string;
}

export interface MenuProps {
  title: string;
  url: string;
  items?: { id?: number; subTitle?: string; subUrl?: string }[];
}
