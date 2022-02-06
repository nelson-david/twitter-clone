import { Link } from "react-router-dom";
import * as GiIcons from "react-icons/gi";

const Rightbar = () => {

	const trends = [
		{
			title: "#portable",
			no_tweets: "5,603",
			category: "Music . Trending",
		},
		{
			title: "Only in Nigeria",
			no_tweets: "9,603",
			category: "Trending in Nigeria",
		},
		{
			title: "Rihanna",
			no_tweets: "9,603",
			category: "Pop . Trending",
		},
		{
			title: "iPhone 12",
			no_tweets: "9,603",
			category: "Technology . Trending",
		},
		{
			title: "Laycon",
			no_tweets: "9,603",
			category: "Trending in Nigeria",
		},
	]

	return (
		<div className="card rightbar__card">
			<form>
				<input
					type="search"
					placeholder="Search Twitter"
					className="form-control"
					id="search__form"
				/>
			</form>
			<br />
			<div className="trends__card">
				<p id="trends_headtext">
					Trends For You
					<Link to="/settings/trends">
						<GiIcons.GiPokecog />
					</Link>
				</p>
				<>
				{
					trends.map((trend, index) => {
						return(
							<SingleTrendCard
								trend={trend}
								key={index}
							/>
						)
					})
				}
				</>
				<br />
				<Link
					to="/trends"
					id="showmore__link"
				>Show more</Link>
			</div>
		</div>
	)
}

const SingleTrendCard = ({trend}) => {
	return (
		<div className="card singletrend__card">
			<span>{trend.category}</span>
			<p>{trend.title}</p>
			<i>{trend.no_tweets} Tweets</i>
		</div>
	)
}

export default Rightbar;