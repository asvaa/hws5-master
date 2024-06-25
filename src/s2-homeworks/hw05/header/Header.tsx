import React, { FC, useState } from 'react';
import burgerIcon from './burger.svg';
import s from './Header.module.css';
import { useLocation } from 'react-router-dom';
import { PATH } from '../Pages';

type PropsType = {
	handleOpen: () => void;
};

export const Header: FC<PropsType> = ({ handleOpen }) => {
	const [menuVisible, setMenuVisible] = useState(false);
	const location = useLocation();
	const currentPath = location.pathname;

	const pageName = (() => {
		switch (currentPath) {
			case PATH.PRE_JUNIOR:
				return 'Pre-junior';
			case PATH.JUNIOR:
				return 'Junior';
			case PATH.JUNIOR_PLUS:
				return 'Junior Plus';
			default:
				return 'Error';
		}
	})();

	const toggleMenu = () => {
		setMenuVisible(!menuVisible);
		handleOpen();
	};

	return (
		<>
			<div id={'hw5-header'} className={s.header}>
				<img
					src={burgerIcon}
					id={'hw5-burger-menu'}
					className={s.burgerMenuIcon}
					onClick={toggleMenu}
					alt={'open menu'}
				/>
				<h1>{pageName}</h1>
			</div>
			{menuVisible && <div id={'hw5-menu'} className={s.menu}></div>}
		</>
	);
};
