export interface Post {
  id?: number;
  title: string;
  firstContent: string;
  SecondContent: string;
  ThirdContent: string;
  Subtitle: string;
  description: string;
  CategoryId: number;
  UserId: number;
  Codes?: Code[];
  Image?: Image;
}

export interface Code {
  Id: number;
  Content: string;
  Description: string;
  PostId: number;
}

export interface Image {
  Id: number;
  Url: string;
  IsMain: boolean;
  PublicId: string;
  PostId: number;
}
