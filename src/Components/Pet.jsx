import React, { useState, useEffect } from 'react'

export default function Pet({pet}) {

    const [isLoading, setIsLoading] = useState(false);
    const [petState, setPetState] = useState(pet);

    useEffect(() => {
        setPetState(pet);
    }, [pet]);

    function mindegy() {
        setIsLoading(true);

		fetch("/api/pets", {
			method: "POST",
			body: JSON.stringify({ name: petState.name, isVaccinated: !petState.isVaccinated})
		})
			.then(r => r.json())
			.then(d => {
				if (d.success === true) {
                    setPetState({...petState, isVaccinated: !petState.isVaccinated})
				}
			})
			.finally(() => setIsLoading(false))
	}


    return (
        <p>
            {petState.name} {petState.animal} Vaccinated: {""}
            <button
                onClick={
                    (e) => mindegy()
                }
            >
                {isLoading ? "..." : petState.isVaccinated ? "true" : "false"}

            </button>
        </p>

    )
}
