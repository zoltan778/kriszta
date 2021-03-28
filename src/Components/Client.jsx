import React, { useState } from "react";
import Pet from './Pet.jsx';

function Client({ data, callback }) {



	return (
		<div className="namesList">


			<p>
				{data.name}
			</p>

			{
				data.pets.map((pet, y) =>
					<Pet key={y} pet={pet}/>
				)
			}

		</div >
	);
}

export default Client;