import { useEffect } from "react";
const VideoHeader = () => {

    useEffect(() => {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
    
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
        let player;
    
        window.onYouTubeIframeAPIReady = () => {
          player = new window.YT.Player('video-header-iframe', {
            videoId: 'PDiImjfYgbY',
            playerVars: {
              autoplay: 1,
              mute: 1,
              loop: 1,
              controls: 0,
              showinfo: 0,
              rel: 0,
              iv_load_policy: 3
            },
            events: {
              onReady: (event) => {
                event.target.mute();
                event.target.playVideo();
                event.target.seekTo(0);
              },
            },
          });
        };
    
        return () => {
          if (player) {
            player.destroy();
          }
        };
      }, []);
    
      return (
        <div className="video-header">
          <div id="video-header-iframe"></div>
        </div>
      );
    
}

export default VideoHeader