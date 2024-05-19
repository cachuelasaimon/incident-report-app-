import { IBaseUserSchema } from './IBaseSchema';

export type IStaff = IBaseUserSchema & {
  employeeNumber: string; // textField
  position: 'teacher' | 'general staff'; // select
};
