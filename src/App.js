import "./index.css";
import ImageCard from "./Components/ImageCard";
import "./assets/slider3.jpg";
import "./assets/slider2.jpg";

import TopCourse from "./Components/TopCourse";
import NavbarPage from "./Components/NavbarPage";

import BlogPage from "./Components/BlogPage";
import Course from "./Components/Pages/Course";
import FooterPage from "./Components/FooterPage";
import MailLetter from "./Components/MailLetter";
import Events from "./Components/EventsPage";
import EventsPage from "./Components/EventsPage";
import ImageSlider from "./Components/ImageSlider";
import Profilecard from "./Components/Pages/Profilecard";
function App() {
  return (
    <div className="App bg-[#f3f3f3] overflow-x-hidden">
      <NavbarPage />
      <ImageCard />
      <TopCourse />
      <Profilecard />
      <BlogPage />
      <MailLetter />
      <FooterPage />
    </div>
  );
}

export default App;
