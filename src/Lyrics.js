import { useState, useEffect, useRef, useCallback } from 'react';
import { default as LrcString } from './Lrc';
import { Lrc } from 'react-lrc';
import classNames from 'classnames';
import Header from './Header';

const components = {
    "[header]": <Header />
};

const Lyrics = ({ started, singing, setSinging }) => {
    const [ms, setMs] = useState(1400);
    const [currentLine, setCurrentLine] = useState(0);
    const ref = useRef(null);

    // Auto increase ms
    useEffect(() => {
        if (started) {
            const interval = setInterval(() => {
                setMs(ms => ms + 500);
            }, 500);
            return () => clearInterval(interval);
        }
    }, [ms, started]);

    const renderer = ({ index, active, line }) => {
        const component = components[line.content];
        return component
            ? <div key={index} className={classNames(active ? "" : "opacity-20", "m-4 mb-20 transition-all duration-700")}>{component}</div>
            : <div key={index} className={classNames(active ? "" : "opacity-40 scale-75", "text-white transition-all mt-4 duration-1000 font-bold text-3xl origin-left ml-4 mr-10 break-normal")}>{line.content}</div>;
    };

    const onLineChange = useCallback((index, line) => {
        setCurrentLine(index);
    }, []);

    useEffect(() => {
        if (!singing) {
            setSinging(true);
        }
    }, [currentLine, setSinging, singing]);

    return (
        <>
            <Lrc
                ref={ref}
                lrc={LrcString}
                lineRenderer={renderer}
                currentMillisecond={ms}
                autoScroll={true}
                style={{ height: "100vh" }}
                onLineChange={onLineChange}
                intervalOfRecoveringAutoScrollAfterUserScroll={1000}
            />
        </>
    );
};

export default Lyrics;