import { projectCredits } from "../projectCredits";
import openInNew from "../assets/open-in-new.svg";

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

  const handleClickCloseModal = () => {
    document.getElementById('creditsModal').close();
  }

  return (
    <>
      <p id="credits" onClick={handleClickShowModal}>Credits</p>
      <dialog id="creditsModal" closedby="any">
        <button type="button" id="closeModal" onClick={handleClickCloseModal} >Close</button>
        Credits:
        <ul>
          {
            projectCredits.map((source) => {
              return (
                <li key={source.name}>
                  <p>
                    {source.desc}
                    <a href={source.link} target="_blank"><img className="site-link-img" src={openInNew} alt="link" /></a>
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