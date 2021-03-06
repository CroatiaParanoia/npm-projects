export interface CheckboxProps {
  disabled?: boolean;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  layout?: 'column' | 'inline';
}
