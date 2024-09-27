
import React, { useState} from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
// boxShadow: '0px 0px 9px 12px red'

const styleLights = {width : 110, height : 110};



	
//create your first component
const Home = () => {
	const [styleBox, setStyleBox] = useState({width : 200, height : 400}) 
	const [lights, setLights] = useState(["red", "yellow", "green"]);

	const [ shadow, setShadow] = useState("");

	function handlerClick (index){
		setShadow(lights[index])
		}

	function handlerAddColor() {
		if (lights.length === 3){
		setLights(["red", "yellow", "green", "purple"]);
		setStyleBox({width : 200, height : 550});
		} else {setLights(["red", "yellow", "green"]); setStyleBox({width : 200, height : 400})}
	}
	
	function handlerNextColor() {
		switch (shadow){
			case "": setShadow(lights[0]); break;
			case "red": setShadow(lights[1]); break;
			case "yellow": setShadow(lights[2]); break;
			case "green": ((lights.length === 3)?(setShadow(lights[0])): (setShadow(lights[3]))); break
			case "purple": setShadow(lights[0]); break;
		}
	}

	return (
		<div className="d-flex flex-column align-items-center">
			<div className="bg-black" style={{width : 20, height : 80}}></div>
			<div className="bg-black d-flex flex-column align-items-center" style={styleBox} >
				{lights.map((color, index)=>(
				<div key={index} 
					className="rounded-circle my-auto" 
					style={{ ...styleLights, boxShadow: '0px 0px 9px 12px ' + ((color===shadow)? shadow : ""), background: color}}
					onClick={()=>handlerClick(index)} >

				</div>))}
				
			</div>
			<div className='d-flex flex-column align-items-center'>
				<button className="btn my-3 d-block" onClick={handlerAddColor} style={{background: "purple", color: 'black'}}>Purple Light ON/OFF</button>
				<button className="btn btn-secondary d-block" onClick={handlerNextColor}>Next Color</button>
			</div>
			
		</div>
	);
};

export default Home;
