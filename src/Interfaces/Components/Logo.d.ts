//#region Global Imports
import { Props } from 'react';
import {Logo} from "@Types";
//#endregion Global Imports

declare module ILogo {
    export interface IProps extends Props<{}> {
        logo: Logo;
    }

    export interface IState { }
}