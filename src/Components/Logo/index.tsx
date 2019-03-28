//#region Global Imports
import * as React from 'react';
//#endregion Global Imports

//#region Local Imports
import './style.scss';
//#endregion Local Imports

import {ILogo} from "@Interfaces/Components/Logo";
//#endregion Interface Imports

export class LogoComponent extends React.Component<ILogo.IProps, ILogo.IState> {
    public render(): JSX.Element {
        let logo = this.props.logo;
        let image = logo.image;
        return (
            <div role="img" className="container container--image display--block--inline" aria-label={image.ariaLabel}>
                <img src={image.src} alt={image.altText} title={image.altText} width={image.width} height={image.altText}/>
                <p>Slogan</p>
            </div>
        );
    }
}
