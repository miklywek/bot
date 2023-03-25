import Nav from "../src/components/Nav";
import Sidebar from "./components/SideBar";
import Start from "./pages/Start";
import { Route, Routes, Router } from "react-router-dom";
import TableName from "./pages/TableName";
import Configure from "./pages/Configure";
import DoneBot from "./pages/DoneBot";
import Mybots from "./pages/MyBots";
import DetailsInfo from "./pages/DetailsInfo";

function App() {
  return (
    <>
      <Nav />
      <div
        className="flex
      "
      >
        <Sidebar />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/name" element={<TableName />} />
          <Route path="/configure" element={<Configure />} />
          <Route path="/done" element={<DoneBot />} />
          <Route path="/bots" element={<Mybots />} />
          <Route path="/info" element={<DetailsInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
