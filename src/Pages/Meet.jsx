import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import "./main1.css";
const Meet = () => {
  const { roomId } = useParams();
  const myMeet = async (ele) => {
    const appId = 1637928923;
    const ServerSecret = "a5f22a5eb3358362219323fd00dd044e";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      ServerSecret,
      roomId,
      Date.now().toString(),
      "Your Name"
    );
    const Zegocloud = ZegoUIKitPrebuilt.create(kitToken);
    Zegocloud.joinRoom({
      container: ele,
      sharedLinks: [
        {
          name: "Copy Link",
          url: "https://myvidchat.netlify.app/meet/copy-link?roomId=" + roomId,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };
  return (
    <div>
      <div ref={myMeet} className="mymeet" />
    </div>
  );
};

export default Meet;
