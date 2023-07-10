import React from 'react';
import CareScale from './CareScale';

const PlantItem = ({ id, cover, name, water, light }) => {

    const handleClick = (name)=>{
        alert(`hello ! ici se trouve la ${name}`)
    }
    return (
        <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem;