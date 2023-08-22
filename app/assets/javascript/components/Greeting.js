import React ,{ useEffect} from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { fetchrandommessage } from '../redux/messageSlice';

const Greeting =()=>{

    const dispatch = useDispatch();
    const {error,loading,randomMessage} = useSelector((state)=>state.randomMessage);
    useEffect(()=>{
        dispatch(fetchrandommessage())
    },[dispatch])
    return (
        <div>
            
                {loading && <h1>It is loading</h1>}
                 {error && <h1>{error}</h1>}
                 {randomMessage && <h1>{randomMessage}</h1>}
           
        </div>
    )
}

export default Greeting