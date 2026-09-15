import { projectCredits } from "../projectCredits";


export default function Footer() {
  return (
    <footer className="footer" >
      <p>Designed by <a id="gitLink">Haidar Abas</a></p>
      <Credits />
    </footer>
  )
}

function Credits() {

  const handleClickShowModal = () => {
    document.getElementById('creditsModal').showModal();
  }

  return (
    <>
      <p id="credits" onClick={handleClickShowModal}>Credits</p>
      <dialog id="creditsModal" closedby="any">
        Credits:
        <ul>
          {
            projectCredits.map((source) => {
              return (
                <li key={source.name}>
                  <p>
                    {source.desc}
                    <a href={source.link} target="_blank"><img src="src/assets/open-in-new.svg" alt="link" /></a>
                  </p>
                </li>
              )
            })
          }
        </ul>
      </dialog>
    </>
  )
}