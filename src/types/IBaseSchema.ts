export type IBaseSchema = {
  /* Represents a base schema structure that
includes various properties with specific types and comments describing
their purpose. Here is a breakdown of each property: */

  createdAt?: string; // prefilled
  modifiedAt: string; // prefilled
  modifiedBy?: string; // prefilled
  schoolYear?: string; // prefilled
};

export type IBaseUserSchema = IBaseSchema & {
  name: string; // textField
  email?: string; // email field
  phone?: string; // textField
  picture?: string; // fileUpload
};
