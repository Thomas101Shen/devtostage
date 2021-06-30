import React, {useState} from 'react'
import "./Gallery.css"

export const Gallery = ({data}) => {
	const [model, setModel] = useState(false);
	const[tempImage, setTempImage] = useState('');
	const getImg = (image) =>{
		setTempImage(image);
		setModel(true);
	}
	return (
		<body>
			<div className={model ? "model open" : "model"}>
				<img src={tempImage}/>
			</div>
			<div className = 'gallery'>
				{data.map((item, index)=>{
					return(
						<div className="pics" key={index} onClick={() => {getImg(item.image); window.scrollTo({top:0, behavior:"smooth"});}}>
							<img src={item.image} style={{width: '100%'}}/>
						</div>
						)})}
			</div>
		</body>
	)
}

export default Gallery