import React, { useEffect, useRef, useState } from 'react';

const YouTubePlayer = () => {
  let player;
  const [cnt, setCnt] = useState(0);
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = initializePlayer;

    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  const initializePlayer = () => {
    player = new window.YT.Player('player', {
      width: '375px',
      height: '672px',
      videoId: 'PJ1qwQAA2VQ',
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  };

  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      timeoutIdRef.current = setTimeout(() => {
        const currentTime = player.getCurrentTime();
        const duration = player.getDuration();
        if (currentTime / duration > 0.5) {
          setCnt((cnt) => cnt + 1);
        }
      }, 500); // 0.5초마다 확인
    } else {
      clearTimeout(timeoutIdRef.current);
    }
  };

  return (
    <div>
      <div id="player"></div>
      <p>Count: {cnt}</p>
    </div>
  );
};

export default YouTubePlayer;
