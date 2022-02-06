import { useState } from "react";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as ImIcons from "react-icons/im";
import ScrollContainer from 'react-indiana-drag-scroll';
import SelectedImage from "../misc/SelectedImage";
import ProfileImg from "../../assets/img/profile_image.jpg";

const NewpostCard = () => {

	const [ postText, setPostText ] = useState("");
	const [ buttonState, setButtonState ] = useState("");
	const [ imageSelectedState, setImageSelectedState ] = useState(false);
	const [ newImageUrl, setnewImageUrl ] = useState([]);
	const [ newFileObj, setNewFileObj ] = useState([]);
	const [ processingPost, setProcessingPost ] = useState(false);

	setTimeout(() => {
		if (postText === "" || postText.length < 2){
			setButtonState(true);
		}else{
			setButtonState(false);
		}
	}, 1);

	const fileObj = [];
	const fileArray = [];

	const onImageSelect = (event) => {
		fileObj.push(event.target.files);
		setNewFileObj(event.target.files);

		for (let i = 0; i < fileObj[0].length; i++) {
			fileArray.push(URL.createObjectURL(fileObj[0][i]));
		}
		console.log("File Array", fileArray);
		setnewImageUrl(newImageUrl.concat(fileArray));
		setImageSelectedState(true);
	}

	function arrayRemove(arr, value) {
		return arr.filter(function(ele){
			return ele !== value;
		});
	}

	const removeSingleImage = (e) => {
		const name = e.currentTarget.dataset.name;
		var result = arrayRemove(newImageUrl, name);
		setnewImageUrl(result);
	}

	const uploadPost = (e) => {
		e.preventDefault();
		setProcessingPost(!processingPost);

		console.log(postText);
		console.log(newFileObj);

		var form_data = new FormData();
		form_data.append("textData", postText);

		var totalfiles = newFileObj.length;
		for (var index = 0; index < totalfiles; index++) {
			form_data.append("files", newFileObj[index]);
			console.log(newFileObj[index]);
			console.log("appended");
		}

		setProcessingPost(!processingPost);

	}

	return (
		<div className="card newpost__card">
			<div className="d-flex">
				<Link to="/nelson__david">
					<img
						alt="profile_image"
						src={ProfileImg}
						id="profile_img"
					/>
				</Link>
				<form onSubmit={uploadPost}>
					<textarea
						type="text"
						cols="45"
						placeholder="What's happening"
						onChange={(e) => setPostText(e.target.value)}
					/>
					<div className="newpost__icons">
						<label
							htmlFor="twitterclone-imageselect">
							<BsIcons.BsImages />
						</label>
						<input
							type="file"
							name="twitterclone-imageselect"
							id="twitterclone-imageselect"
							hidden={true}
							multiple={true}
							onChange={onImageSelect}
							accept="image/*"
						/>

						<button
							type="submit"
							disabled={buttonState}
						>
							{processingPost?<ImIcons.ImSpinner10/>:'Tweet'}
						</button>
					</div>
					<ScrollContainer className="post_preview_div">
					{
						imageSelectedState?
						<>
						{
							newImageUrl ? newImageUrl.map((value, index) => {
								return (
								<SelectedImage
									key={index}
									value={value}
									passedIndex="1"
									removeSingleImage={removeSingleImage}
								/>
								)
							}):''
						}
						</>:''
					}
					</ScrollContainer>
				</form>
			</div>
		</div>
	)
}

export default NewpostCard;