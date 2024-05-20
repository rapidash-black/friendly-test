import { FollowerWhereUniqueInput } from "./FollowerWhereUniqueInput";
import { FollowerUpdateManyWithoutFollowersInput } from "./FollowerUpdateManyWithoutFollowersInput";

export type FollowerUpdateInput = {
  followee?: string | null;
  follower?: FollowerWhereUniqueInput | null;
  followers?: FollowerUpdateManyWithoutFollowersInput;
};
