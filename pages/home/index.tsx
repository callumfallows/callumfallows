//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
//#endregion Global Imports

//#region Interface Imports
import { IHomePage, IStore } from '@Interfaces';
import { Heading } from '@Components';
import { HomeActions } from '@Actions';
//#endregion Interface Imports

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
								<Heading text="World!"/>
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