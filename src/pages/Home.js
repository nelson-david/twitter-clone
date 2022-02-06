import Sidebar from "../components/nav/Sidebar";
import Rightbar from "../components/nav/Rightbar";
import HomeNav from "../components/nav/HomeNav";
import NewpostCard from "../components/card/NewpostCard";
import PostPage from "./subPages/PostPage";

const Home = () => {
    return (
        <div className="row">
            <div className="col-xl-3" id="sidebar__col">
                <Sidebar />
            </div>
            <div className="col-xl-5" id="mainapp__col">
                <HomeNav />
                <NewpostCard />
                <PostPage />
            </div>
            <div className="col-xl-4" id="rightbar__col">
                <Rightbar />
            </div>
        </div>
    )
}

export default Home;