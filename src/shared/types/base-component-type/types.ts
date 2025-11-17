import { ReactNode } from 'react';

export interface IBaseComponentType {
  children: ReactNode;
}

export interface ICard {
  id: number;
  title: string;
  subTitle: string;
  image: string;
}
