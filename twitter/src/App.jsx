import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import FeedPage from "./pages/FeedPage";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />

        <Route element={<ProtectedRoute/>}>
          <Route path="/home" element={<FeedPage />} />
          <Route path="/1" element={<h1>Ozel sayfa</h1>} />
          <Route path="/2" element={<h1>Ayar sayfa</h1>} />
          <Route path="/3" element={<h1>Like sayfa</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
