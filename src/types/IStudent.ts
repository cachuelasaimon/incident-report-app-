import { IBaseUserSchema } from './IBaseSchema';

export type IStudents = IBaseUserSchema & {
  studentNumber: string; // textField
};
