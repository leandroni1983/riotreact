import React,{useContext,useState,useEffect} from 'react'
import { SummonerContext } from '../context';
import axios from 'axios'

export const SummonerRanks = () => {
    const {playerdata,api_key} = useContext(SummonerContext);
    const [ranks, setRanks] = useState({});
    const dataRanks = async() =>{
        try {
            const url = `https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerdata.id}?api_key=${api_key}`
            const response = await axios.get(url)
            return response
        } catch (error) {
            console.log(error)     
        }
    }

    useEffect(() => {
      async  function ranksData() {
           const response = await dataRanks()
            console.log(response.data)
            setRanks(response.data)
        }
        ranksData()
    }, []);
    
    return {
        dataRanks,
        ranks
    }
}
