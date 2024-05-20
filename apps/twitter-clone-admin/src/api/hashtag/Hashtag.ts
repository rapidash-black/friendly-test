import { Tweet } from "../tweet/Tweet";

export type Hashtag = {
  createdAt: Date;
  id: string;
  tag: string | null;
  tweet?: Tweet | null;
  updatedAt: Date;
};
