import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable';

const YouTubePlayer = () => {
  const [cnt, setCnt] = useState(0);
  const intervalIdRef = useRef(null);
  const [url, setUrl] = useState('vaHAz7Ht_uw');
  const [playnum, setPlaynum] = useState(0);
  const playlist = ['PJ1qwQAA2VQ', '091slAwn95g', '7Csq_aCxIU0'];
  const playerRef = useRef(null);
  const videoWatchedRef = useRef(false); // 새로운 ref 추가

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = initializePlayer;

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.loadVideoById(url);
      videoWatchedRef.current = false; // 새로운 비디오 로드 시 초기화
    }
  }, [url]);

  const handlers = useSwipeable({
    onSwipedUp: () => {
      console.log('Swiped Up!');
      setPlaynum((prevPlaynum) => {
        const newPlaynum = (prevPlaynum + 1) % playlist.length;
        setUrl(playlist[newPlaynum]);
        return newPlaynum;
      });
    },
  });

  const initializePlayer = () => {
    playerRef.current = new window.YT.Player('player', {
      width: '375px',
      height: '672px',
      videoId: url,
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
      intervalIdRef.current = setInterval(() => {
        const currentTime = playerRef.current.getCurrentTime();
        const duration = playerRef.current.getDuration();
        if (currentTime / duration > 0.5 && !videoWatchedRef.current) {
          setCnt((cnt) => cnt + 1);
          videoWatchedRef.current = true; // 비디오가 50% 이상 재생된 상태로 업데이트
          clearInterval(intervalIdRef.current);
        }
      }, 1000);
    } else {
      clearInterval(intervalIdRef.current);
    }
  };

  return (
    <div>
      <div id="player"></div>
      <p>Count: {cnt}</p>
      <Block {...handlers} />
    </div>
  );
};

export default YouTubePlayer;

const Block = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
`;
