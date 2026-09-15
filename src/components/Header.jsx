export default function Header({score, highScore}) {
  return (
    <header className="header" >
      <p id="gameTitle">Astrology Memory Game</p>
      <Scoreboard score={score} highScore={highScore}/>
      <UIThemes />
    </header>
  )
}

function Scoreboard({score, highScore}) {
  const pickScore = (s) => s % 12;
  const roundScore = (s) => Math.trunc(s / 12);

  return (
    <div className="score-board">
      <div className="current-score">
        <p className="score">Score: {pickScore(score)}</p>
        <p className="round">Round: {roundScore(score)}</p>
      </div>
      <div className="best-score">
        <p className="high-score">Best: s:{pickScore(highScore)} / r:{roundScore(highScore)}</p>
      </div>
    </div>
  )
}

function UIThemes() {
  const handleClickLight = (e) => {
    document.body.classList.contains('auto-color-scheme')
      && document.body.classList.replace('auto-color-scheme', 'light-color-scheme');

    document.body.classList.contains('dark-color-scheme')
      && document.body.classList.replace('dark-color-scheme', 'light-color-scheme');
  }

  const handleClickDark = (e) => {
    document.body.classList.contains('auto-color-scheme')
      && document.body.classList.replace('auto-color-scheme', 'dark-color-scheme');

    document.body.classList.contains('light-color-scheme')
      && document.body.classList.replace('light-color-scheme', 'dark-color-scheme');
  }

  return (
    <div id="UIThemes">
      <button id="darkTheme" className="theme-btn" onClick={handleClickDark}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z" />
        </svg>
      </button>
      <button id="lightTheme" className="theme-btn" onClick={handleClickLight}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" />
        </svg>
      </button>
    </div>
  )
}