import { BsCardImage } from "react-icons/bs";

const Form = ({ user }) => {
  return (
    <form className="flex gap-3 p-4 border-b-[1px] border-gray-700">
      <img
        className="rounded-full h-[35px] md:h-[45px] mt-1"
        src={user?.photoURL}
        alt="profile-pic"
      />

      <div className="w-full ">
        <input
          type="text"
          className="w-full bg-transparent my-2 outline-none md:text-lg "
          placeholder="Neler Oluyor"
        />

        <div className="flex justify-between items-center">
          <label
            htmlFor="image-input"
            className="hover:bg-gray-800 text-lg transition p-4 cursor-pointer rounded-full"
          >
            <BsCardImage />
          </label>

          <input className="hidden" id="image-input" type="file" />
          <button className="bg-blue-600 flex items-center justify-center px-4 py-2 min-w-[85px] min-h-[40px] rounded-full transition hover:bg-blue-800 ">
            Tweetle
          </button>
        </div>
      </div>
    </form>
  );
};
export default Form;
