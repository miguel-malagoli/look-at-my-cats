import React, { useState } from 'react';
import CATS from '../constants/cats';
import LangContext, { LangOptions } from '../constants/lang';

import Home from './Home';
import Profile from './Profile';

function App() {

	const [activeCat, setActiveCat] = useState<number | undefined>(undefined);
	const [lang, setLang] = useState<LangOptions>('en');

	return (
		<LangContext.Provider value={lang}>
			{activeCat === undefined &&
				<Home handleCat={setActiveCat} />
			}
			{activeCat !== undefined &&
				<Profile cat={CATS[activeCat]} deselect={setActiveCat} setLanguage={setLang} />
			}
		</LangContext.Provider>
	);
}

export default App;