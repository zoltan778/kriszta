import React, { useState, useEffect } from "react";
import Pet from './Pet.jsx';

function Client({ data, callback }) {

    const [dataState, setDataState] = useState(data);

	useEffect(() => {
		setDataState(data);
	}, [data])

	return (
		<div className="namesList">


			<p>
				{dataState.name}
			</p>

			{
				dataState.pets.map((pet, y) =>
					<Pet key={y} pet={pet}/>
				)
			}

		</div >
	);
}

export default Client;