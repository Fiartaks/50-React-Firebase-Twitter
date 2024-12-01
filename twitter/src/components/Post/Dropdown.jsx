import { useRef } from "react";

const Dropdown = ({handleDelete, setIsEditMode}) => {

  const checkbox = useRef()

  return (
    <>
      <label className="popup">
        <input ref={checkbox} type="checkbox" />
        <div className="burger" tabindex="0">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="popup-window">
          <legend>Aksİyonlar</legend>
          <ul>
            <li>
              <button onClick={handleDelete}>
                <img src="edit.svg" />
                <span>Sil</span>
              </button>
            </li>
            <hr />
            <li>
              <button onClick={()=>{

                //checkbox tikini kaldir
               checkbox.current.checked=false;

                setIsEditMode(true);
              }} >
                <img src="delete.svg" />

                <span>Düzenle</span>
              </button>
            </li>
          </ul>
        </nav>
      </label>
    </>
  );
};
export default Dropdown;
