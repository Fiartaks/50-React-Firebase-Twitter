import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import moment from 'moment/moment'
import 'moment/locale/tr'


const Post = ({ tweet }) => {
//!tweet atilma tarihi suandan once ne zaman atigidigini gosteriyor
   const date= moment(tweet?.createdAt?.toDate()).fromNow();
   

  return (
    <div className="relative flex gap-3 py-6 px-3 border-b-[1px] border-gray-700">
      <img
        className="w-12 h-12 rounded-full"
        src={tweet.user.photo}
        alt="profile pic"
      />

      <div className="w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <p className="font-bold">{tweet.user.name}</p>
            <p className="text-gray-400">{tweet.user.name}</p>
            <p className="text-gray-400">{date}</p>
          </div>
          <button>| | |</button>
        </div>

        <div className="my-4">
          {tweet.textContent && <p>{tweet.textContent}</p>}

          {tweet.imageContent && <img src={tweet.imageContent} />}
        </div>

        <div className="flex justify-between">
          <div className="grid place-items-center py-2 px-3 rounded-full cursor-pointer transition hover:bg-[#00b7ff69]">
            <BiMessageRounded />
          </div>
          <div className="grid place-items-center py-2 px-3 rounded-full cursor-pointer transition hover:bg-[#00ff4436]">
            <FaRetweet />
          </div>
          <div className="grid place-items-center py-2 px-3 rounded-full cursor-pointer transition hover:bg-[#e857d969]">
            <AiOutlineHeart />
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
