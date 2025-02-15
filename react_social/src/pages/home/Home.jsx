import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "./home.css";
const Home = (props) => {
    return (
        <>
          <Topbar />
          <div className="homeContainer">
            <Sidebar />
            <Feed/>
            <Rightbar/>
          </div>
        </>
      );
}

export default Home
