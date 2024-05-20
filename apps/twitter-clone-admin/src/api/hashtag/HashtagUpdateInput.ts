import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type HashtagUpdateInput = {
  tag?: string | null;
  tweet?: TweetWhereUniqueInput | null;
};
