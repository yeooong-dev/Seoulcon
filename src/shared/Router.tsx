import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/main/Main";
import SeoulconAbout from "../pages/seoulcon/SeoulconAbout";
import Bi from "../pages/seoulcon/Bi";
import Lineup from "../pages/seoulcon/Lineup";
import Goods from "../pages/seoulcon/Goods";
import Festival from "../pages/program/festival/Festival";
import Conference from "../pages/program/conference/Conference";
import Contents from "../pages/program/contents/Contents";
import Performance from "../pages/program/performance/Performance";
import Timeline from "../pages/info/Timeline";
import Notice from "../pages/info/Notice";
import Tourist from "../pages/info/Tourist";
import Attend from "../pages/attend/Attend";
import FestivalPage from "../pages/program/festival/FestivalPage";
import FestivalPage2 from "../pages/program/festival/FestivalPage2";
import FestivalPage3 from "../pages/program/festival/FestivalPage3";
import FestivalPage4 from "../pages/program/festival/FestivalPage4";
import FestivalPage5 from "../pages/program/festival/FestivalPage5";
import ConferencePage from "../pages/program/conference/ConferencePage";
import ConferencePage2 from "../pages/program/conference/ConferencePage2";
import ConferencePage3 from "../pages/program/conference/ConferencePage3";
import ContentsPage from "../pages/program/contents/ContentsPage";
import ContentsPage2 from "../pages/program/contents/ContentsPage2";
import ContentsPage3 from "../pages/program/contents/ContentsPage3";
import ContentsPage4 from "../pages/program/contents/ContentsPage4";
import ContentsPage5 from "../pages/program/contents/ContentsPage5";
import ContentsPage6 from "../pages/program/contents/ContentsPage6";
import PerformancePage from "../pages/program/performance/PerformancePage";
import PerformancePage2 from '../pages/program/performance/PerformancePage2';
import NoticePage from '../pages/info/NoticePage';

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
        <Route path='/contents' element={<Contents />} />
        <Route path='/performance' element={<Performance />} />
        <Route path='/timeline' element={<Timeline />} />
        <Route path='/notice' element={<Notice />} />
        <Route path='/tourist' element={<Tourist />} />
        <Route path='/attend' element={<Attend />} />

        <Route path='/festivalPage' element={<FestivalPage />} />
        <Route path='/festivalPage2' element={<FestivalPage2 />} />
        <Route path='/festivalPage3' element={<FestivalPage3 />} />
        <Route path='/festivalPage4' element={<FestivalPage4 />} />
        <Route path='/festivalPage5' element={<FestivalPage5 />} />

        <Route path='/conferencePage' element={<ConferencePage />} />
        <Route path='/conferencePage2' element={<ConferencePage2 />} />
        <Route path='/conferencePage3' element={<ConferencePage3 />} />

        <Route path='/contentsPage' element={<ContentsPage />} />
        <Route path='/contentsPage2' element={<ContentsPage2 />} />
        <Route path='/contentsPage3' element={<ContentsPage3 />} />
        <Route path='/contentsPage4' element={<ContentsPage4 />} />
        <Route path='/contentsPage5' element={<ContentsPage5 />} />
        <Route path='/contentsPage6' element={<ContentsPage6 />} />

        <Route path='/performancePage' element={<PerformancePage />} />
        <Route path='/performancePage2' element={<PerformancePage2 />} />

        <Route path='/noticePage' element={<NoticePage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
