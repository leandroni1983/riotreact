import React, { useState } from 'react'
import { SummonerContext } from './SummonerContext'
import axios from 'axios'
export const SummonerProvider = ({ children }) => {
    const api_key = import.meta.env.VITE_API_KEY
    const [searchText, setSearchText] = useState('')
    const [playerdata, setPlayerData] = useState({})
    const [playererror, setPlayerError] = useState({})


    const getSummonerData = async () => {
        setPlayerData({})
        if (searchText != '') {
            const baseURL = `https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchText}?api_key=${api_key}`
            await axios.get(baseURL)
                .then(function (response) { setPlayerData(response.data) })
                .catch(function (error) { setPlayerError(error.message) })
        }
    }


    const setSearchSummoner = (e) => {
        e.preventDefault()
        setSearchText(e.target.value)
    }

    return (
        <SummonerContext.Provider value={{
            api_key,
            playerdata,
            playererror,
            setSearchSummoner,
            getSummonerData,
        }}>
            {children}
        </SummonerContext.Provider>
    )
}
