//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
//#endregion Global Imports

//#region Interface Imports
import { IHomePage, IStore } from '@Interfaces';
import {LogoComponent} from '@Components';
import { HomeActions } from '@Actions';
import { ImageType, LogoType } from '@Types';

const LOGO_IMAGE = new ImageType(
	"https://via.placeholder.com/320x100.png/fff/09f",
	100,
	320,
	"https://via.placeholder.com/620x200.png/fff/09f 2x", "Logo image",
	"Main logo text");

const MAIN_LOGO = new LogoType(LOGO_IMAGE);

export class HomePage extends React.Component<IHomePage.IProps, IHomePage.IState> {

	public render(): JSX.Element {

		return (
			<div className="page-content page-content--home">
				<div className="container container--left-navigation">
					<nav className="left-navigation-menu" id="main-nav" role="navigation" aria-label="Site navigation">
						<ul className="left-navigation-menu__list">
							<li className="left-navigation-menu__list__item">
								<a href="#" title="Home">Home</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className="container container--main">
					<main role="main" id="main">
						<div className="container container--page-content">
							<div className="page-content">
								<LogoComponent logo={MAIN_LOGO}/>
							</div>
						</div>
					</main>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: IStore) => state.home;

const mapDispatchToProps = (dispatch: Dispatch) => (
	{
		Map: bindActionCreators(HomeActions.Map, dispatch)
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);