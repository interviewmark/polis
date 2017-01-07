import React from "react";
import Comment from "./participantGroupComment";
import * as globals from "./globals";
import Flex from "./flex"

const ParticipantGroup = ({repnessIndex, groupComments, math, conversation, allComments}) => {

  const drawGroupComments = () => {
    const allCommentsKeyed = _.keyBy(allComments, "tid");

    return groupComments.map((c, i) => {
      // const groupVotes = math["group-votes"][repnessIndex].votes[comment.tid];
      // const isBestAgree = comment["best-agree"] && (groupVotes && groupVotes.A > 0);
      // const agree = isBestAgree || comment["repful-for"] === "agree";
      // const percent = agree ?
      // Math.floor(groupVotes.A / groupVotes.S * 100) :
      // Math.floor(groupVotes.D / groupVotes.S * 100);

      return <Comment
        conversation={conversation}
        key={i}
        index={i}
        comment={allCommentsKeyed[c.tid]}/>

    })
  }

  return (
    <div
      style={{
        marginBottom: 70,
        width: "100%"
      }}>
      <Flex justifyContent={"flex-start"} styleOverrides={{width: "100%"}}>
        <p style={{
            width: globals.paragraphWidth
          }}>
          <span style={{fontSize: 18}}>
            {`GROUP ${+repnessIndex + 1} `}
          </span>
          <span style={{fontSize: 18}}>
            {` • ${math["group-votes"][repnessIndex]["n-members"]} participants`}
          </span>
        </p>
        <span
          style={{
            width: globals.barChartWidth,
            position: "relative",
            left: 40
          }}>
          All (3425345)
        </span>
        <span
          style={{
            width: globals.barChartWidth,
            position: "relative",
            left: 40
          }}>
          This group (3425345)
        </span>
      </Flex>

      {drawGroupComments()}
    </div>
  );
};

export default ParticipantGroup;
