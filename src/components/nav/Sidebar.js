import { Link } from "react-router-dom";
import * as GoIcons from "react-icons/go";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import * as VsIcons from "react-icons/vsc";
import * as BsIcons from "react-icons/bs";

const Sidebar = () => {
	return (
		<div className="card sidebar__card">
			<ul>
				<div className="sidebar__header">
					<Link to="/">
						<VsIcons.VscTwitter />
					</Link>
				</div>
				<li>
					<Link to="/">
						<GoIcons.GoHome />
						Home
					</Link>
				</li>
				<li>
					<Link to="/">
						<GiIcons.GiCompass />
						Explore
					</Link>
				</li>
				<li>
					<Link to="/">
						<VsIcons.VscBell />
						Notifications
					</Link>
				</li>
				<li>
					<Link to="/">
						<AiIcons.AiOutlineMessage />
						Messages
					</Link>
				</li>
				<li>
					<Link to="/">
						<BsIcons.BsBookmark />
						Bookmarks
					</Link>
				</li>
				<li>
					<Link to="/">
						<AiIcons.AiOutlineUser />
						Profile
					</Link>
				</li>
				<div id="tweetbutton__div">
					<Link to="/tweet" id="createtweet_button">
						Tweet
					</Link>
				</div>
			</ul>
		</div>
	)
}

export default Sidebar;