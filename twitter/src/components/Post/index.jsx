import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import moment from "moment/moment";
import "moment/locale/tr";
import {
  arrayRemove,
  arrayUnion,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { auth, db } from "../../firebase/config";
import Dropdown from "./Dropdown";
import { useState } from "react";
import EditMode from "./EditMode";

const Post = ({ tweet }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const isLiked = tweet.likes.includes(auth.currentUser.uid);

  //!tweet atilma tarihi suandan once ne zaman atigidigini gosteriyor
  const date = moment(tweet?.createdAt?.toDate()).fromNow();

  //lik olayini ele alma
  const handleLike = async () => {
    // oturumu acik olalan kullanicinin id sini eklemek

    //dokumanin refeansini al
    const ref = doc(db, "tweets", tweet.id);

    //lik durumunu guncelle
    await updateDoc(ref, {
      likes: isLiked
        ? arrayRemove(auth.currentUser.uid) //like varsa kaldir
        : arrayUnion(auth.currentUser.uid), // like yoksa ekle
    });
  };

  //tweet silme

  const handleDelete = async () => {
    if (confirm("Tweet i silmeyi onayliyor musunuz? ")) {
      //Kaldiricagimiz dokuman referansini almak
      const tweetRef = doc(db, "tweets", tweet.id);

      await deleteDoc(tweetRef);
    }
  };

  return (
    <div className="relative flex gap-3 py-6 px-3 border-b-[1px] border-gray-700">
      <img
        className="w-12 h-12 rounded-full"
        src={tweet.user.photo}
        alt="profile pic"
      />

      <div className="w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <p className="font-bold">{tweet.user.name}</p>
            <p className="text-gray-400">{tweet.user.name}</p>
            <p className="text-gray-400">{date}</p>
            {tweet.isEdited && (
              <p className="text-gray-400 text-[10px]"> * Düzenlendi</p>
            )}
          </div>

          {tweet.user.id === auth.currentUser.uid && (
            <Dropdown
              handleDelete={handleDelete}
              setIsEditMode={setIsEditMode}
            />
          )}
        </div>

        <div className="my-4">
          {/* duzenleme modundaysak editMode bilesenioni ekrana bas */}

          {isEditMode && (
            <EditMode tweet={tweet} close={() => setIsEditMode(false)} />
          )}

          {tweet.textContent && !isEditMode && <p>{tweet.textContent}</p>}

          {tweet.imageContent && !isEditMode && (
            <img src={tweet.imageContent} />
          )}
        </div>

        <div className="flex justify-between">
          <div className="grid place-items-center py-2 px-3 rounded-full cursor-pointer transition hover:bg-[#00b7ff69]">
            <BiMessageRounded />
          </div>
          <div className="grid place-items-center py-2 px-3 rounded-full cursor-pointer transition hover:bg-[#00ff4436]">
            <FaRetweet />
          </div>
          <div
            onClick={handleLike}
            className="flex justify-center items-center gap-2 py-2 px-3 rounded-full cursor-pointer transition hover:bg-[#e857d969]"
          >
            {isLiked ? <FcLike /> : <AiOutlineHeart />}
            <span>{tweet.likes.length}</span>
          </div>
          <div className="grid place-items-center py-2 px-3 rounded-full cursor-pointer transition hover:bg-[#7e7e7ea8]">
            <FiShare2 />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
