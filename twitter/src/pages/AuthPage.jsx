import { useState } from "react";
import { auth } from "./../firebase/config";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const[isError, setIsError]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      createUserWithEmailAndPassword(auth, email, pass)
        .then(() => {
          toast.info("Hesabiniz Olusturuldu");
          navigate("/home");
        })
        .catch((err) => {
          toast.error(err.code);
        });
    } else {
signInWithEmailAndPassword(auth, email, pass)
.then(()=>{
  toast.info("Giris Yapildi");
  navigate("/home");
  
})
.catch((err)=> {
 
 if (err.code === 'auth/invalid-credential'){
  setIsError(true)
  toast.error(`Kullanıcı adı veya şifre yanlış: $err.code`)
 }
  
    })
    }
  };

  const sendMail =()=>{
    sendPasswordResetEmail(auth, email)
    .then(()=>{
      toast.info("Şifre sıfırlama maili gönderildi");
    })
  }

  return (
    <section className="h-screen grid place-items-center">
      <div className="bg-black flex flex-col gap-10 py-16 px-32 rounded-lg">
        <div className="flex justify-center">
          <img className="h-[60px]" src="x-logo.webp" alt="" />
        </div>
        <h1 className="text-center font-bold text-xl">Twitter a giris yap</h1>

        <button className="flex items-center bg-white py-2 px-10 rounded-full text-black gap-3 transition hover:bg-gray-300 ">
          <img className="h-[20px]" src="/google-logo.svg" alt="" />
          <span className="whitespace-nowrap">Google ile Giris Yap</span>
        </button>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="text-black rounded mt-1 p-2 shadow-lg focus:shadow-[gray]"
            type="text"
            required
          />

          <label className="mt-5">Sifre</label>
          <input
            onChange={(e) => setPass(e.target.value)}
            className="text-black rounded mt-1 p-2 shadow-lg focus:shadow-[gray]"
            type="password"
            required
          />

          <button className="bg-white text-black mt-10 rounded-full p-1 font-bold transition hover:bg-gray-300 ">
            {isSignUp ? "Kaydol" : "Giris Yap"}
          </button>
          <p className="mt-5 flex gap-3">
            <span className="text-gray-500">
              {isSignUp ? "Hesabiniz varsa" : "Hesabiniz yoksa"}{" "}
            </span>
            <span
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-500 cursor-pointer"
            >
              {isSignUp ? "Giris yapin" : "Kaydolun"}
            </span>
          </p>
        </form>

        {isError && ( 
           <p onClick={sendMail} className="text-center text-red-500 cursor-pointer ">
           Sifrenizi mi unuttunuz
         </p>
        ) }

       
      </div>
    </section>
  );
};
export default AuthPage;
