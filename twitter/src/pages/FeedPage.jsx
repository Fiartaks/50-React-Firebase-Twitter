import { useEffect, useState } from "react";
import Aside from "../components/Aside";
import Main from "../components/main";
import Nav from "../components/Nav";
import { onAuthStateChanged } from "firebase/auth";
import { PiNumpadFill } from "react-icons/pi";
import { auth } from "../firebase/config";

const FeedPage = () => {
  const [user, setUser] = useState(null);

  //kullanici bilgisine abone
  useEffect(() => {
    const unsub= onAuthStateChanged(auth, (currUser) => setUser(currUser));

    return () => unsub(); //sayfadan ayrilirsa izlemeyi sonlandir
  }, []);

  return (
    <div className="feed h-screen bg-black overflow-hidden">
      <Nav user={user} />
      <Main user={user} />
      <Aside />
    </div>
  );
};
export default FeedPage;

