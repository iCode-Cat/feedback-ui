export interface ITableLabel {
  labelName: string;
  labelIcon: string;
  labelValue: string;
}

export interface IRadio {
  label: string;
  checked: boolean;
}

export interface IButton {
  text: string;
  theme: 'blue' | 'purple' | 'navy' | 'red' | 'labelBlue';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  padding?: string;
}
