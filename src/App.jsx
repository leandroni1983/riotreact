import React, { useContext } from 'react'
import { SummonerError } from './components'
import { SummonerContext } from './components/context'
import SummonerCard from './components/SummonerCard/SummonerCard'
const App = () => {

  const { getSummonerData, setSearchSummoner, playerdata, playererror } = useContext(SummonerContext)
  return (
    <>
      <div className="container">
        <h1>Lolcito</h1>

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Invocador" aria-label="Invocador" aria-describedby="basic-addon2" onChange={e => setSearchSummoner(e)} />
          <div className="input-group-append">
            <button className="btn btn-outline-primary " type="submit" onClick={getSummonerData}>Search</button>
          </div>
        </div>
        {(JSON.stringify(playerdata) != '{}')
          ? <SummonerCard playerdata={playerdata} />
          : <SummonerError playererror={playererror} />}
      </div>
    </>
  )
}

export default App
