
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
  tags: string[];
}

export enum ModalType {
    NONE,
    CONTACT,
    PRIVACY
}
