import Watch from './watch'
import {IWatch} from '../model'

interface WatchListProps {
    watches: IWatch[],
    removeHandler: (id?: string) => void
}

function WatchList({watches, removeHandler} : WatchListProps ) {

    return(
        <>
        <div className="watches">
            {watches.map(item => 
                <Watch key={item.id} data={item}  onRemove={removeHandler}/>)}
        </div>
        </>
    )
}

export default WatchList