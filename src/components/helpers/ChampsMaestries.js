import React,{useContext,useState,useEffect} from 'react'
import { SummonerContext } from '../context';
import axios from 'axios'
export const ChampsMaestries = () => {
    const {playerdata,api_key} = useContext(SummonerContext);
    const [champs, setChamps] = useState({});
   
    const dataMaestries = async() =>{
        try {
            const url= `https://la2.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${playerdata.id}/top?count=5&api_key=${api_key}`
            const response = await axios.get(url)
            return response
        } catch (error) {
            console.log(error)
        }
          }

    useEffect(() => {
       async function getMaestries(){
        const response = await dataMaestries()
        console.log(response.data)
        setChamps(response.data)
        } 
        getMaestries()
    }, []);
    return {
        dataMaestries,
        champs
    }
}
