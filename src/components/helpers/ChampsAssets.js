import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { ChampsMaestries } from './index'


export const ChampsAssets = () => {
    const [fiveChamps,setFiveChamps] = useState({})
    const [allChampions, setAllChampions]  =useState({})
    const {champs} =ChampsMaestries()
    
const encontrarCampeones = (campeones) =>{
console.log(campeones)
//console.log(campeones)
}
const fiveChamp = async () =>{
const url  = `https://ddragon.leagueoflegends.com/cdn/12.23.1/data/es_AR/champion.json`
    await axios.get(url) 
    .then(resp => encontrarCampeones(resp.data.data))
   
    .catch(err => console.log(err))    
}

useEffect(() => {
    fiveChamp()
}, []);

return{
    fiveChamp,
    allChampions
}
}
