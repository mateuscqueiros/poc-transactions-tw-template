import { RegisterOptions } from "react-hook-form";

export type InputSchemaField = {
  label: string;
  placeholder: string;
  mask: string;
  validation: RegisterOptions;
};

export type InputSchemaType<K extends string = string> = Record<K, InputSchemaField>;
