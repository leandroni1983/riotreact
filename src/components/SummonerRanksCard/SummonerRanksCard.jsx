import React, { useContext, useEffect, useState } from 'react'
import { SummonerRanks } from '../helpers'
export const SummonerRanksCard = () => {
    const { ranks, dataRanks } = SummonerRanks()

    useEffect(() => {
        dataRanks()
    }, []);

    return (
        <>
            < h5 > Ranked</h5 >
            {(JSON.stringify(ranks).length > 3) ? ranks.map(r =>
                <div className="card m-1">
                    <div className="card-body">
                        {r.queueType} {r.tier} {r.rank} wins {r.wins} losses {r.losses}
                    </div>
                </div>

            )


                : <></>}

            {/*
            {(ranks.length != 0) ?
                <>
                    <div className="card m-1">
                        <div className="card-body">
                            {ranks[0]?.queueType} {ranks[0]?.tier} {ranks[0]?.rank} wins {ranks[0]?.wins} losses {ranks[0]?.losses}
                        </div>
                    </div>
                    <div className="card m-1">
                        <div className="card-body">
                            {ranks[1]?.queueType} {ranks[1]?.tier} {ranks[1]?.rank} wins {ranks[1]?.wins} losses {ranks[1]?.losses}
                        </div>
                    </div>
                </>
                : <> <h1>Este player no rankeo</h1></>
            } */}

        </>
    )
}
