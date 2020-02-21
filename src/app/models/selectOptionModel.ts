export interface ISelectOption {
  value: number;
  label: string;
}

export enum SelectOption {
  'active' = 'Активен',
  'stopped' = 'Приостановлен',
  'blocked' = 'Заблокирован',
}
