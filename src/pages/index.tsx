import React from 'react';
import Layout from "@/Layout/BasicLayout";


const Index = (props:{message?:string}) => {
	return (
		<div>
			{props.message}
			<Layout/>
		</div>
	);
};


export default Index;
