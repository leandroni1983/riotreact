import React from 'react'

export const SummonerError = (playererror) => {
    return (
        <>
            {(JSON.stringify(playererror) == '{}')
                ? <><p>search summoner</p></>
                : < p >Summoner Not Found</p>}

        </>
    )
}
