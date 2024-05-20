import { HashtagCreateNestedManyWithoutTweetsInput } from "./HashtagCreateNestedManyWithoutTweetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetCreateInput = {
  content?: string | null;
  hashtags?: HashtagCreateNestedManyWithoutTweetsInput;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
