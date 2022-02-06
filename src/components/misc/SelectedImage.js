import * as MdIcons from "react-icons/md";

const SelectedImage = ({passedIndex, value, removeSingleImage}) => {
	return (
		<div className="col-sm-6 col-8 prev_image_div_col">
			<div className="customCard">
				<MdIcons.MdCancel
					data-index={passedIndex}
					data-name={value}
					className="float-right prevImageHomeCancelIcon"
					onClick={removeSingleImage}
				/>
				<img
					data-index={passedIndex}
					src={value}
					alt={value}
					data-name={value}
					className="img-fluid prev_image_home"
				/>
			</div>
		</div>
	)
}

export default SelectedImage;
