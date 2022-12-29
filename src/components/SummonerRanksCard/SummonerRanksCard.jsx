import React, { useEffect } from 'react'
import { SummonerRanks, ChampsMaestries } from '../helpers'
export const SummonerRanksCard = () => {
    const { ranks, dataRanks } = SummonerRanks()

    return (
        <>
            < h5 > Ranked</h5 >
            {(JSON.stringify(ranks).length > 3) ? ranks.map(r =>
                <div className="card m-1" key={r.leagueId}>
                    <div className="card-body">
                        {r.queueType} {r.tier} {r.rank} wins {r.wins} losses {r.losses}
                    </div>
                </div>
            )
                : <>Este Summoner No rankeo aun</>}
        </>
    )
}
