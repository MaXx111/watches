import { useState, memo, useEffect } from "react";
import { IWatch } from '../model'

interface WatchProps {
    data: IWatch,
    onRemove: (id?: string) => void
}

const Watch = memo(function Watch({ data, onRemove }: WatchProps) {
    const [deg, setDeg] = useState(0);

    useEffect(() => {

        const interval = setInterval(()=>{
            setDeg(deg + 5)
        }, 1000)

        return () => {
            clearInterval(interval)
        }

    }, [deg])

    return (
        <>
        {
            data.title &&
            <div className="clock">
                <h3 className="clock-title">{data.title}</h3>
                <img src="love-favicon.png" className="delete-btn" onClick={() => onRemove(data.id)}/>
                <div className="wrap-clock">
                    <span className="hour" style={{transform: `rotate(${data.timeZone! * 15}deg)`}}></span>
                    <span className="minute"></span>
                    <span className="second" style={{transform: `rotate(${deg}deg)`}} ></span>
                    <span className="dot"></span>
                </div>
            </div>
        }
       </>
    )
});

export default Watch