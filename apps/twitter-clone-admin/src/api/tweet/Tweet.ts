import { Hashtag } from "../hashtag/Hashtag";
import { User } from "../user/User";

export type Tweet = {
  content: string | null;
  createdAt: Date;
  hashtags?: Array<Hashtag>;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
