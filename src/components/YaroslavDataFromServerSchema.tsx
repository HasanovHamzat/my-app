export interface Field {
  key: string;
  chidren_key?: string;
  chidren_value?: string;
  isProperties?: boolean;
  value: string | null | EmployeeListItem[] | FileItem[];
  choises?: string[];
  read_only: boolean;
  view_type: string;
  type?: string;
  // translation: string;
  title: string;
  mask?: string;
  patterns?: string[];
  changeable?: boolean;
  dependant?: string[];
  deps?: { [key: string]: string[] };
  requiredForSubmit?: boolean;
  errorText?: string;
  calcFunction?: (data: any) => number;
  disabled?: boolean;
  extraReqFields?: (formData: { [key: string]: any }) => void;
}