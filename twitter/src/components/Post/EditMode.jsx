import { doc, updateDoc } from "firebase/firestore";
import { useRef } from "react";
import { BiSolidSave } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import { db } from "../../firebase/config";

const EditMode = ({ tweet, close }) => {
  const inputRef = useRef();
  //kaydet butonuna batoinca calisaacak
  const handleSave = async () => {

    //1inputunun icerigine eris
    const newText = inputRef.current.value;

    //2 guncellenecek dokuman referansini al
    const tweetRef =doc(db, 'tweets', tweet.id);

    //3yazi icerigini guncelle
    await updateDoc(tweetRef, { textContent: newText, isEdited:true,  });

    //4 duzenleme modundan cik 
    close();

  };

  return (
    <>
      <input
      defaultValue={tweet.textContent}
        ref={inputRef}
        className="rounded p-1 px-2 text-black"
        type="text"
      />
      <button onClick={handleSave} className="mx-5 p-2 text-green-400 rounded-full shadow hover:shadow-green-500 ">
        <BiSolidSave />
      </button>
      <button
        onClick={close}
        className="mx-5 p-2 text-red-400 rounded-full shadow hover:shadow-red-500 "
      >
        <ImCancelCircle />
      </button>
    </>
  );
};
export default EditMode;
