import React, {useMemo, useState} from 'react';
import MyContext from './MyContext';
import PropTypes from 'prop-types';

const MyProvider = ({children}) => {
	const [menu, setManu] = useState(false);

	const handleOnClickMenu = () => {
		setManu(!menu);
	};

	const value = useMemo(() => ({
		menu,
		handleOnClickMenu,
	}), [menu, handleOnClickMenu]);

	return (
		<MyContext.Provider value={value}>
			{children}
		</MyContext.Provider>
	);
};

export default MyProvider;

MyProvider.propTypes = {
	children: PropTypes.object.isRequired,
};
