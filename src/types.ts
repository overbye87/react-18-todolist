export interface ITodo {
  id: number,
  title: string,
  isDone: boolean,
}

export interface IUser {
  name: string,
}

export type ITodos = ITodo[]

export enum FilterValue {
  ALL = 'all',
  CHECKED = 'checked',
  UNCHECKED = 'unchecked',
}

export interface IOption {
  value: FilterValue,
  label: string,
}

export type IOptions = IOption[]

export interface IPokemon {
  name: string;
  url: string;
}

export interface IStat {
  base_stat: number,
  effort: number,
  stat: {name: string, url: string}
}

export interface IPokemonData {
  id: number,
  height: number,
  stats: IStat[]
  name: string,
  order: number,
  base_experience: number,
  weight: number
  sprites: {front_default: string}
}