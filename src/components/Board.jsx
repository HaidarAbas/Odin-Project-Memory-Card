import { useEffect, useState } from "react"
import { svgParser, fetchSVGData } from "../util/svgUtilities.js"
import { baseURL, svgURLs } from "../data/apiData.js";
import GameController from "../logic/gameController.js";

const controller = new GameController();

export default function Board({highScore , score, incrementScore}) {
  const [gameData, setGameData] = useState(null);

  useEffect(() => {   //effect hook to fetch api data and set state on mount
    let ignore = false;

    if (!ignore) {
      fetchSVGData(baseURL, svgURLs)
        .then((r) => {
          setGameData(r);
        })
    }

    return () => { ignore = true }
  }, []);
  
  useEffect(() => {   //effect hook to cache original gameData array
    if (!controller.clone || controller.clone === 'null') {
      controller.createClone(gameData);
    }
  }, [gameData]);

  const handleClick = (e) => {
    const userSelection = e.currentTarget.id;

    if (controller.pick(gameData, userSelection)) {
      setGameData(controller.shuffle(gameData));
      incrementScore(1);
    } else {
      setGameData(controller.clone);
      incrementScore(-score);

      if (score > highScore) {
        localStorage.setItem('highScore', `${score}`);
      }
    }
  }

  return (
    <div className="game-board" >
      {CardSet(gameData, handleClick)}
    </div>
  )
}

function CardSet(svgCollection, handleClick) {
  if (!svgCollection) { return null }

  const set = svgCollection.map((svg) => {
    return (
      <Card svgData={svg} key={svg.name} handleClick={handleClick} />
    )
  })

  return set;
}

function Card({svgData, handleClick}) {
  return (
    <div className="card" onClick={handleClick} id={svgData.name} >
      <svg xmlns="http://www.w3.org/2000/svg" width={72} height={72} viewBox="0 0 24 24" >
        <path
          fill={svgParser.getFill(svgData.path)}
          d={svgParser.getD(svgData.path)}
        />
      </svg>
      <p>{svgData.name.toUpperCase()}</p>
    </div>
  )
}