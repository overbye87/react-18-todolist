export interface ITodo {
  id: number,
  title: string,
  isDone: boolean,
}

export type ITodos = ITodo[]

export type IFilter =
  FilterValue.ALL
  |  FilterValue.CHECKED
  |  FilterValue.UNCHECKED

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


