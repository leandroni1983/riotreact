import React, { useContext, useEffect } from 'react'
import { SummonerContext } from '../context'
import { SummonerRanksCard } from '../SummonerRanksCard/SummonerRanksCard'
import { SummonerRanks } from '../helpers'
const SummonerCard = () => {
    const { playerdata } = useContext(SummonerContext)
    const { name, profileIconId, summonerLevel } = playerdata
    const { ranks, dataRanks } = SummonerRanks()

    useEffect(() => {
        dataRanks()
    }, []);
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-4'>
                        <div className="card" style={{ width: "15rem" }}>
                            <img className="card-img-top" src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${profileIconId}.png`} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">Level: {summonerLevel}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <SummonerRanksCard ranks={ranks} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SummonerCard
