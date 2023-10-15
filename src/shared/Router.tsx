import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/main/Main";
import SeoulconAbout from "../pages/seoulcon/SeoulconAbout";
import Bi from "../pages/seoulcon/Bi";
import Lineup from "../pages/seoulcon/Lineup";
import Goods from "../pages/seoulcon/Goods";
import Festival from "../pages/program/Festival";
import Conference from "../pages/program/Conference";
import Content from "../pages/program/Content";
import Performance from "../pages/program/Performance";
import Timeline from "../pages/info/Timeline";
import Notice from "../pages/info/Notice";
import Tourist from "../pages/info/Tourist";
import Attend from "../pages/attend/Attend";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<SeoulconAbout />} />
        <Route path='/bi' element={<Bi />} />
        <Route path='/lineup' element={<Lineup />} />
        <Route path='/goods' element={<Goods />} />
        <Route path='/festival' element={<Festival />} />
        <Route path='/conference' element={<Conference />} />
        <Route path='/content' element={<Content />} />
        <Route path='/performance' element={<Performance />} />
        <Route path='/timeline' element={<Timeline />} />
        <Route path='/notice' element={<Notice />} />
        <Route path='/tourist' element={<Tourist />} />
        <Route path='/attend' element={<Attend />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
