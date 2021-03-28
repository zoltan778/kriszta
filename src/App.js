import './App.css'
import React, { useState, useEffect } from "react";
import Client from './Components/Client.jsx'



function App() {

	const [name, setName] = useState("");
	const [ result, setResult ] = useState([]);

	 //async művelet eredményéhez még a fetch nem fér hozzá, a valami változó az később kapja meg az értéket. await az utána lévő kód bevárja a fetchelést.
	 // await helyett lehet then-t használni, mert a then bevárja az eredményt és a thenben fog megjelenni. x= response, és ebből a nyers válaszüzenetből a json metódus szedi ki az adatokat, json formátumot csinál belőle. (a body részét adja vissza fejléc nélkül.) (axiosnál 1 then van és máris megkapom az adatokat jsonban.) Promise-t then-el lehet kezelni.amit egy thenel lehet feloldani vagy awaittel lehet váratni.
	const akarmi = async () => {
		const valami = await fetch(`/api/clients?search=${name}`, 
		).then(r => r.json());
		setResult(valami);
	};


	useEffect(() => {
		console.log(result);
	}, [result])

			
		
	return (
		<div>
			
			<div className="searchDiv">
				<label htmlFor="searchName">Search Name: </label>
				<input
					id="search"
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
			</div>
			<button type="button" onClick={() => akarmi()} className="send">
				Search
			</button>
		
			<div className="content">

				{result.map((arrayelement, b) =>
					<Client key={b} data = {result[b]}
					 callback={akarmi}
					/>
				)
				}
			</div>
			
		</div>
	);
}

export default App;