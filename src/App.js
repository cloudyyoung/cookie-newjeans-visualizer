
import { useRef, useState } from 'react';
import './App.css';
import Lyrics from './Lyrics';
import classNames from 'classnames';

const App = () => {
  const [started, setStarted] = useState(false);
  const [singing, setSinging] = useState(true);
  const audioRef = useRef(null);
  const instrumentalRef = useRef(null);

  const start = () => {
    if (audioRef.current && instrumentalRef.current) {
      setStarted(true);
      audioRef.current.play();
      instrumentalRef.current.play();
    }
  };

  return (
    <>
      <div className={classNames(started ? "hidden" : "", "fixed top-0 left-0 bottom-0 right-0 z-50 bg-black/50")} onClick={start} />
      <audio
        src="cookie.mp3?4"
        autoPlay={true}
        preload='auto'
        className='hidden'
        ref={audioRef}
        controls
        muted={!singing}
      />
      <audio
        src="cookie-instrumental.mp3?4"
        autoPlay={true}
        preload='auto'
        className='hidden'
        ref={instrumentalRef}
        controls
        muted={singing}
      />
      <Lyrics started={started} onTouchStart={() => setSinging(false)} onTouchEnd={() => setSinging(true)} />
    </>
  );
}

export default App;
