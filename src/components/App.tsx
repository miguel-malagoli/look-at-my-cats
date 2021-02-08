import React, { useState } from 'react';
import CATS, { Cat } from '../constants/cats';

import Home from './Home';
import Profile from './Profile';

function App() {

	const [activeCat, setActiveCat] = useState<number | undefined>(undefined);

	if (activeCat === undefined) {
		return <Home handleCat={setActiveCat} />;
	} else {
		return <Profile cat={CATS[activeCat]} deselect={setActiveCat} />;
	}
}

export default App;