import { IInfo } from "../interfaces/interfaces";


export interface IAction {
	type: string,
	list?: any,
}

export interface IInfoState {
	list: IInfo;
}