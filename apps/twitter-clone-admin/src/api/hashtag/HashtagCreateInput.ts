import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type HashtagCreateInput = {
  tag?: string | null;
  tweet?: TweetWhereUniqueInput | null;
};
