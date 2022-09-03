import { useState, useEffect } from 'react';
import { default as LrcString } from './Lrc';
import { Lrc } from 'react-lrc';
import classNames from 'classnames';
import Header from './Header';

const components = {
    "[header]": <Header />
};

const Lyrics = ({ started }) => {
    let [ms, setMs] = useState(1250);

    // Auto increase ms
    useEffect(() => {
        if (started) {
            setInterval(() => {
                ms += 100;
                setMs(ms);
                console.log(ms);
            }, 100);
        }
    }, [started]);

    const renderer = ({ index, active, line }) => {
        const component = components[line.content];
        return component
            ? <div key={index} className={classNames(active ? "" : "opacity-20", "m-4 mb-20 transition-all duration-500")}>{component}</div>
            : <div key={index} className={classNames(active ? "" : "opacity-40 scale-75", "text-white transition-all mt-4 duration-500 font-bold text-3xl origin-left ml-4 mr-10 break-normal")}>{line.content}</div>;
    };

    return (
        <>
            <Lrc
                lrc={LrcString}
                lineRenderer={renderer}
                currentMillisecond={ms}
                autoScroll={true}
                style={{ height: "100vh" }}
                intervalOfRecoveringAutoScrollAfterUserScroll={1000}
            />
        </>
    );
};

export default Lyrics;