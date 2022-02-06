import * as VsIcons from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";

const PostMoreCard = () => {
	return (
		<div className="card postmore__card">
			<ul>
				<li>
					<Link>
						<VsIcons.VscComment />
						55
					</Link>
				</li>
				<li>
					<Link>
						<RiIcons.RiShareCircleLine />
						7
					</Link>
				</li>
				<li>
					<Link to="/retweet">
						<FaIcons.FaRegHeart />
						65k
					</Link>
				</li>
{/*				<li>
					<Link to="/retweet">
						<RiIcons.RiShareCircleLine />
					</Link>
				</li>*/}
			</ul>
		</div>
	)
}

export default PostMoreCard;