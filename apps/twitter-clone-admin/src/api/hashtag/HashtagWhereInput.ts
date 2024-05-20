import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type HashtagWhereInput = {
  id?: StringFilter;
  tag?: StringNullableFilter;
  tweet?: TweetWhereUniqueInput;
};
