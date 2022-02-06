
const Keep = () => {
	return (
	<>

						<label
							htmlFor="twitterclone-audioselect">
							<AiIcons.AiFillAudio />
						</label>
						<input
							type="file"
							name="twitterclone-audioselect"
							id="twitterclone-audioselect"
							hidden={true}
						/>

						<label
							htmlFor="twitterclone-gifselect">
							<AiIcons.AiOutlineGif />
						</label>
						<input
							type="file"
							name="twitterclone-gifselect"
							id="twitterclone-gifselect"
							hidden={true}
						/>

						<label
							htmlFor="twitterclone-videoselect">
							<AiIcons.AiOutlineVideoCameraAdd />
						</label>
						<input
							type="file"
							name="twitterclone-videoselect"
							id="twitterclone-videoselect"
							hidden={true}
						/>
	</>
	)
}