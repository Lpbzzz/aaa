import React from "react";
import {connect} from "dva";

@connect(({list}) => {
	return {list};
})
class Show extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state={
			obj:{
				texts:{
					name:'lili'
				}
			}
		}
	}
	render() {
		const { obj } = this.state;
		console.log(obj?.texts)
		return (
			<div>show</div>
		);
	}
}

export default Show;

