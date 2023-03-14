import React from "react";

export const People = () => {
	return (
		fetch("https://www.swapi.tech/api/people/1")
			.then(res => res.json())
			.then(data => console.log(data))
			.catch(err => console.error(err))
	)
}