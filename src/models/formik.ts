import { SelectProps } from '@material-ui/core/Select/Select';
import { CheckboxProps } from '@material-ui/core/Checkbox/Checkbox';
import { RadioGroupProps } from '@material-ui/core/RadioGroup/RadioGroup';
export interface InputProps {
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  value?: string;
  name: string;
  type?: 'text' | 'number' | 'password' | 'email';
  autoComplete?: 'off';
  error?: string;
  className?: string;
  onBlur?(e: React.FocusEvent): void;
  onFocus?(e: React.FocusEvent): void;
  onChange?(e: React.ChangeEvent): void;
}

export type FormikInput<T = unknown> = Omit<T, 'value' | 'onChange' | 'onBlur'>;

export interface FormikTextInputProps extends FormikInput<InputProps> {
  type?: 'number' | 'text' | 'email';

  onBlur?(e: React.FocusEvent<Element>): void;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;

  value?: string;
}
export interface FormikSelectProps extends SelectProps {
  name: string;
  label?: string;
  children: React.ReactNode;
}
export interface FormikCheckboxProps extends CheckboxProps {
  name: string;
  label?: string;
}
export interface FormikRadioGroupProps extends RadioGroupProps {
  name: string;
  label?: string;
}
