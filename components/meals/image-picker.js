"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
	let [pickedImage, setPickedImage] = useState();
	let imageInputRef = useRef();
	let testRef = useRef();

	

	let handlePickClick = () => {
		console.log(imageInputRef);
		imageInputRef.current.click();
	};

	// Image preview event:
	// 1. When user selects an image, it will be read and displayed in the preview section.
	// 2. If user cancels the file picker, it will display "No image picked yet".

	let handleImageChange = (event) => {
		console.log(event)
		const file = event.target.files[0];

		if (!file) {
			setPickedImage(null)
			return;
		}

		let fileReader = new FileReader();
		fileReader.onload = () => {
			setPickedImage(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	};

	return (
		<div className={classes.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={classes.controls}>
				<div className={classes.preview}>
					{!pickedImage && <p>No image picked yet</p>}
					{pickedImage && (
						<Image
							src={pickedImage}
							alt="Image selected by user."
							fill
						/>
					)}
				</div>
				<input
					className={classes.input}
					type="file"
					id={name}
					accept="image/png, image/jpeg"
					name={name}
					ref={imageInputRef}
					onChange={handleImageChange}
					required
				/>
				<button
					className={classes.button}
					type="button"
					onClick={handlePickClick}
				>
					Pick an Image
				</button>
			</div>
			
		</div>
	);
}
