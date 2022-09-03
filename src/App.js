
import { useRef, useState } from 'react';
import './App.css';
import Lyrics from './Lyrics';
import ReactAudioPlayer from 'react-audio-player';
import classNames from 'classnames';

const App = () => {
  const [started, setStarted] = useState(false);
  const audioRef = useRef(null);

  const start = () => {
    if (audioRef.current) {
      setStarted(true);
      audioRef.current.play();
    }
  };

  return (
    <>
      <div className={classNames(started ? "hidden" : "", "fixed top-0 left-0 bottom-0 right-0 z-50 bg-black")} onClick={start} />
      <audio
        src="cookie.mp3"
        autoPlay={true}
        preload='auto'
        className='hidden'
        ref={audioRef}
      />
      <Lyrics started={started} />
    </>
  );
}

export default App;
