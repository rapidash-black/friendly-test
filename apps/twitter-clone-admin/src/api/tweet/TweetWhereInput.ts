import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HashtagListRelationFilter } from "../hashtag/HashtagListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetWhereInput = {
  content?: StringNullableFilter;
  hashtags?: HashtagListRelationFilter;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
