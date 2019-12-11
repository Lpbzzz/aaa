import * as React from "react";
import { useState } from "react";
import { Icon, Layout, Menu } from 'antd';
import '@/Layout/index.less';
import styles from '@/Layout/setting.module.css';


interface IRegisterUser {
	Left? : React.ReactElement;
	Right? : JSX.Element;
}

const {Header, Sider, Content} = Layout;

let RegisterUser : React.FC<IRegisterUser> = () => {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<Layout>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="logo"/>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
					<Menu.Item key="1">
						<Icon type="user"/>
						<span>nav 1</span>
					</Menu.Item>
					<Menu.Item key="2">
						<Icon type="video-camera"/>
						<span>nav 2</span>
					</Menu.Item>
					<Menu.Item key="3">
						<Icon type="upload"/>
						<span>nav 3</span>
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout>
				<Header style={{background : '#fff', padding : 0}}>
					<Icon
						className="trigger"
						type={collapsed ? 'menu-unfold' : 'menu-fold'}
						onClick={() => {
							setCollapsed(!collapsed);
						}}
					/>
				</Header>
				<Content
					style={{
						margin : '24px 16px',
						padding : 24,
						background : '#fff',
						minHeight : 280,
					}}
				>
					<div className={styles.red}>333</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default RegisterUser;
