import "./index.css";
import ImageCard from "./Components/ImageCard";
import ImageCarousel from "./Components/ImageCarousel";
import "./assets/slider3.jpg";
import "./assets/slider2.jpg";


import TopCourse from "./Components/TopCourse";
import NavbarPage from "./Components/NavbarPage";

import LoginPage from "./Components/Pages/Events";
import BlogPage from "./Components/BlogPage";
import Events from "./Components/Pages/Events";
import LoginForm from "./Components/Pages/LoginForm";
import Course from "./Components/Pages/Course";
function App() {
  return (
    <div className="App bg-[#f3f3f3]">
      <NavbarPage />

      <ImageCard />
      <Course />

     
      <TopCourse />
     
<BlogPage />   
<Events />  

 </div>
  );
}

export default App;
