import React, {useState} from "react";
import Nav from "./Nav";
import Cards from './Cards'

import hogs from "../porkers_data";


function App() {
	let [filterGreased, setFilterGreased] = useState(false)
	let [sortValue, setSortValue] = useState('name')

	function handleFilterGreased() {
		setFilterGreased((filterGreased) = !filterGreased)
	}

	function handleSortValue(e) {
		setSortValue(sortValue = e.target.value.toString())
	}

	const sortedHogs = hogs.sort((hog1, hog2) => {
		if (sortValue === 'weight') {
			return hog1.weight - hog2.weight
		}
		if (sortValue === 'name') {
			return hog1.name.localeCompare(hog2.name)
		}
	})

	return (
		<div className="App">
			<Nav />
			<button onClick={handleFilterGreased}>Filter Greased</button>
			<button value='name' onClick={handleSortValue}>Sort by Name</button>
			<button value='weight' onClick={handleSortValue}>Sort by Weight</button>
			<Cards sortedHogs={sortedHogs} filterGreased={filterGreased} sortValue={sortValue} />
		</div>
	);
}

export default App;
