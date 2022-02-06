import CrewImg from "../../assets/img/profile_image.jpg";

const ImageContent = () => {
	return (
		<>
			<p>
				Nothing makes me more happy than seeing the crew together:;
			</p>
			<img
				src={CrewImg}
				alt="NBGCrewImg"
				className="imagecontent__img"
			/>
		</>
	)
}

export default ImageContent;