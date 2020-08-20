export enum FormFieldTag {
  Input = 'input',
  Select = 'select',
}

export type FormField = {
  tag: FormFieldTag;
  type: string;
  name: string;
  label: string;
  required: boolean;
};
