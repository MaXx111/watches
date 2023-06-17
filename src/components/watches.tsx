import { useState, useCallback } from 'react'
import Form from './form'
import WatchList from './WatchList'
import { IWatch } from '../model'
import { v4 } from 'uuid'

function Watches() {

    const [watches, setWatch] = useState<IWatch[]>([])

    const onSubmit = useCallback((text: string, time: number) => {

        if(!text || !time) return

        const newWatch:IWatch = {
            id: v4(),
            title: text,
            timeZone: time
        }

        setWatch(prevWatch => {
            return [...prevWatch, newWatch]
        })

    }, []);

    const onRemove = useCallback((id?: string) => {
        setWatch(prevWatch => {
            return prevWatch.filter(item => item.id !== id)
        });
    }, [])
    

    return (
        <>
            <Form onSubmit={onSubmit}/>
            <WatchList watches={watches} removeHandler={onRemove}/>
        </>
    )
}

export default Watches