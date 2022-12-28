import React,{useContext,useState,useEffect} from 'react'
import { SummonerContext } from '../context';
import axios from 'axios'
export const SummonerRanks = () => {
    const {playerdata,api_key} = useContext(SummonerContext);
    const [ranks, setRanks] = useState({});
    console.log(playerdata.id)
    const dataRanks = () =>{

        const url = `https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerdata.id}?api_key=${api_key}`
        axios.get(url)
        .then(function(response){setRanks(response.data)})
        .catch(function(error){console.log(error)})
    }

    return {
        dataRanks,
        ranks
    }
}
