import { Follower as TFollower } from "../api/follower/Follower";

export const FOLLOWER_TITLE_FIELD = "followee";

export const FollowerTitle = (record: TFollower): string => {
  return record.followee?.toString() || String(record.id);
};
