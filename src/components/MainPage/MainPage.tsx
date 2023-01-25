import Image from "next/image";
import PostsSection from "./MainContent/Posts/PostsSection";
import Stories from "./MainContent/Stories/Stories";
import Suggestions from "./MainContent/Suggestions/Suggestions";
import Navbar from "./Navbar/Navbar";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className="ml-56 h-screen">
        <div className="flex justify-center bg-slate-50">
          <div>
            <Stories />
            <PostsSection />
          </div>
          <Suggestions />
        </div>
      </div>
    </>
  );
};
export default MainPage;
