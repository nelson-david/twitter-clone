import TextContent from "../../components/card/TextContent";
import ImageContent from "../../components/card/ImageContent";
import PostMoreCard from "../../components/card/PostMoreCard";
import { Link } from "react-router-dom";
import * as HiIcons from "react-icons/hi";
import * as BsIcons from "react-icons/bs";
import ProfileImg1 from "../../assets/img/img1.jpg";
import ProfileImg2 from "../../assets/img/profile_image.jpg";

const posts = [
	{
		type: "text_content",
		author: {
			name: "Praise NBG",
			username: "PraiseOnyekachi",
			verified: true,
			profile_picture: ProfileImg1
		},
	},
	{
		type: "image_content",
		author: {
			name: "NBG Gang",
			username: "theNBGCrew",
			verified: true,
			profile_picture: ProfileImg2
		},
	}
]

const PostPage = () =>{
	return (
		<div className="post__page">
		{
			posts.map((post, index) => {
				return(
				<div
					key={index}
					className="card post__card textpost__card">
					<div className="postcard__body">
						<img
							src={post.author.profile_picture}
							className="postauthor__img"
							alt="PostAuthorImage"
						/>
						<div id="postcontent__div">
							<Link to="/praisemike" id="userhead_details">
								{post.author.name}
								<HiIcons.HiBadgeCheck />
								<span>@{post.author.username}</span>
								<i>
									<BsIcons.BsChevronBarExpand />
								</i>
							</Link>

							{
								post.type==="text_content"?
								<TextContent
								/>:''
							}
							{
								post.type==="image_content"?
								<ImageContent
								/>:''
							}

							<PostMoreCard />
						</div>
					</div>
				</div>
				)
			})
		}
		</div>
	)
}

export default PostPage;