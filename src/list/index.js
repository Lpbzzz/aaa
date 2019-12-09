import React from 'react';
import {connect} from 'dva';
import Show from "@/list/show";


function App(props) {
	console.log('props', props);
	return (
		<div>
			<Show/>
			---
			333
			---
		</div>
	);
}


export default connect(({list}) => {
	return {list};
})(App);
