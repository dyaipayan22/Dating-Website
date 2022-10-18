import "./App.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import ChatBox from "./components/Chat/ChatBox";
import Login from "./components/Login & Register/Login";
import FeedScreen from "./screens/FeedScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path= "/" element = {<HomeScreen/>}/>
        <Route  path= "/signup" element = {<Login/>}/>
        <Route  path= "/chat" element = {<ChatBox/>}/>
        <Route  path= "/feed" element = {<FeedScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
