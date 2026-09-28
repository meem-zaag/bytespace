"use client";

import { App } from "antd";
import { useState } from "react";
import AppButton from "@/components/ui/AppButton";
import Pill from "@/components/ui/Pill";

/**
 * Follower pill + Follow toggle. There are no accounts in this static build, so following is a
 * local, optimistic toggle with a confirmation message.
 *
 * @param {object} props
 * @param {string} props.creatorName
 * @param {number} props.followers
 * @param {string[]} props.followerLabels [singular, plural]
 * @param {typeof import("@/lib/data/creatorProfile").creatorProfile.follow} props.labels
 * @param {"pill" | "button"} props.part which half to render (pill on the left, button on the right)
 * @param {boolean} props.following
 * @param {(next: boolean) => void} props.onToggle
 */
function FollowPart({ creatorName, followers, followerLabels, labels, part, following, onToggle }) {
  const { message } = App.useApp();
  const count = followers + (following ? 1 : 0);

  if (part === "pill") {
    return (
      <Pill size="lg" aria-live="polite">
        <span className="text-primary-800">{count}</span>
        {count === 1 ? followerLabels[0] : followerLabels[1]}
      </Pill>
    );
  }

  return (
    <AppButton
      aria-pressed={following}
      onClick={() => {
        onToggle(!following);
        const template = following ? labels.unfollowedMessage : labels.followedMessage;
        message.success(template.replace("{name}", creatorName));
      }}
      className={following ? "bg-white hover:bg-neutral-50" : undefined}
    >
      {following ? labels.followingLabel : labels.label}
    </AppButton>
  );
}

/**
 * Stats row of the creator hero: course count pill, follower pill and the Follow button.
 *
 * @param {object} props
 * @param {string} props.creatorName
 * @param {number} props.courseCount
 * @param {number} props.followers
 * @param {typeof import("@/lib/data/creatorProfile").creatorProfile} props.content
 */
export default function CreatorFollow({ creatorName, courseCount, followers, content }) {
  const [following, setFollowing] = useState(false);
  const shared = {
    creatorName,
    followers,
    followerLabels: content.stats.followers,
    labels: content.follow,
    following,
    onToggle: setFollowing,
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <ul className="flex flex-wrap gap-4">
        <li>
          <Pill size="lg">
            <span className="text-primary-800">{courseCount}</span>
            {courseCount === 1 ? content.stats.courses[0] : content.stats.courses[1]}
          </Pill>
        </li>
        <li>
          <FollowPart {...shared} part="pill" />
        </li>
      </ul>
      <FollowPart {...shared} part="button" />
    </div>
  );
}
