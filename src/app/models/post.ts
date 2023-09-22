export interface Post {
  Id?: number;
  Title: string;
  FirstContent: string;
  SecondContent: string;
  ThirdContent: string;
  Subtitle: string;
  Description: string;
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
