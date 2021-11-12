import Header from "./components/Header";
import PostsBar from "./components/PostsBar";
import RighBar from "./components/RighBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Header />
      <div className="flexer container">
      <SideBar />
      <PostsBar/>
      <RighBar/>
      </div>
      
    </>
  );
}

export default App;
