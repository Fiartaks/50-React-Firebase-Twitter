import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../firebase/config";

const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    //anlik olarak otutumu izle degisimde state guncelle

    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });

    //Kullsnici sAYFAN AYRILIRSA IZLEYICIYI KALDIR
    return () => unsub();
  }, []);

  //eger yetkisi yoksa

  if (isAuth === false) return <Navigate to={"/"} />;

  //yetkisi varsa sayfayi goster

  return <Outlet />;
};
export default ProtectedRoute;
