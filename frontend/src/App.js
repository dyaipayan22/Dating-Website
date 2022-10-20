import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBox from "./components/Chat/ChatBox";
import Login from "./components/Login & Register/Login";
import FeedScreen from "./screens/FeedScreen";
import HomeScreen from "./screens/HomeScreen";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import Header from "./components/Header";
import { useCookies } from "react-cookie";

function App() {
<<<<<<< HEAD
  const [cookies,setCookie,removeCookie]=useCookies(['user'])
  const authToken = cookies.authToken

=======
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const authToken = cookies.authToken;
  console.log(authToken);
>>>>>>> f33d3d14b373e72d411d2298f5c5131340a7c021
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/signup" element={<Login />} />
        {authToken && <Route path="/chat" element={<ChatBox />} />}
        {authToken && <Route path="/feed" element={<FeedScreen />} />}
        {authToken && (
          <Route path="/onboarding" element={<OnBoardingScreen />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
