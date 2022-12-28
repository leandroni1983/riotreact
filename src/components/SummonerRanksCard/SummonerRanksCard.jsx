import React, { useContext, useEffect } from 'react'

export const SummonerRanksCard = ({ ranks }) => {
    return (
        <>
            < div > Ranked</div >
            {(ranks.length != 0) ?
                <>
                    <div className="card m-1">
                        <div className="card-body">
                            {ranks[0]?.queueType} {ranks[0]?.tier} {ranks[0]?.rank} wins {ranks[0]?.wins} losses {ranks[0]?.losses}
                        </div>
                    </div>
                    <div className="card m-1">
                        <div className="card-body">
                            {ranks[1]?.queueType}{ranks[1]?.tier} {ranks[1]?.rank} wins {ranks[1]?.wins} losses {ranks[1]?.losses}
                        </div>
                    </div>
                </>
                : <> <h1>Este player no rankeo</h1></>
            }
            {/* {JSON.stringify(ranks)} */}
        </>
    )
}
