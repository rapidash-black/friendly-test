import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";
import { FollowerCreateNestedManyWithoutFollowersInput } from "./FollowerCreateNestedManyWithoutFollowersInput";

export type FollowerCreateInput = {
  followee?: string | null;
  follower?: FollowerWhereUniqueInput | null;
  followers?: FollowerCreateNestedManyWithoutFollowersInput;
};
