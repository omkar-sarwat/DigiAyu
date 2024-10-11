import React from 'react';
import Section from './Section';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoConference = () => {
  const { id } = useParams(); // Destructure id from useParams
    const roomID = id;

    let myMeeting = async (element) => {
        // generate Kit Token
         const appID = "";
         const serverSecret = "";
         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  'DWEDWFWC23');
   
       
        // Create instance object from Kit Token.
         const zp = ZegoUIKitPrebuilt.create(kitToken);
         // start the call
         zp.joinRoom({
           container: element,
           sharedLinks: [
             {
               name: 'Personal link',
               url:
                window.location.protocol + '//' + 
                window.location.host + window.location.pathname +
                 '?roomID=' +
                 roomID,
             },
           ],
           scenario: {
             mode: ZegoUIKitPrebuilt.GroupCall, 
           },
         });
        
    };
        

  return (
    <Section>
      <div ref={myMeeting} className=' mx-28 bg-slate-50 h-[700px]'> 
      </div>
    </Section>
  );
};



export default VideoConference;
