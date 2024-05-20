import { HashtagUpdateManyWithoutTweetsInput } from "./HashtagUpdateManyWithoutTweetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetUpdateInput = {
  content?: string | null;
  hashtags?: HashtagUpdateManyWithoutTweetsInput;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
