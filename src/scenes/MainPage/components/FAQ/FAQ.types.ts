import {SetStateAction} from "react";

export interface IFAQProps {
  ask: string;
  answers: string[];
}

export interface IFAQItemProps {
  ask: string;
  children: any;
  activeItem: boolean;
  setActiveItem: SetStateAction<any>;
}