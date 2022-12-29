import React, { useContext, useEffect } from 'react'

import { ChampsAssets, ChampsMaestries } from '../helpers'
export const ChampionsCards = () => {
    const { fiveChamp } = ChampsAssets()
    const { champs } = ChampsMaestries()
    return (
        <>
            <h5>Champions</h5>
            {(JSON.stringify(champs).length > 3)
                ? champs.map(c =>
                    <p key={c.championId}>{c.championId}</p>
                )
                : <></>}


        </>
    )
}
