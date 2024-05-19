import { IBaseSchema } from './IBaseSchema';
import { IStaff } from './IStaff';
import { IStudents } from './IStudent';

/**
 * The type `IIncidentReports` defines the structure of an incident report object in TypeScript,
 * including various fields such as incident date, list of students involved, teacher, incident type,
 * location, status, and description.
 */
export type IIncidentReport = IBaseSchema & {
  /**
   * The `createdAt` property in the `IIncidentReports` type is a string
   * type and is prefilled with a value.
   */
  createdAt?: string;

  /**
   * The `modifiedAt` property in the `IIncidentReports` type is a
   * required field that represents the timestamp when the incident report was last modified. It is
   * prefilled with a string value.
   */
  modifiedAt: string;

  /**
   * The `modifiedBy` property in the `IIncidentReports` type is a string
   * that is prefilled with the user who last modified the incident report. It is optional and can be
   * left empty if not applicable.
   */
  modifiedBy?: string;

  /**
   * The `schoolYear` property in the `IIncidentReports` type is
   * prefilled and represents the academic year during which the incident occurred.
   */
  schoolYear?: string;

  /**
   * The `incidentDate` property in the `IIncidentReports` type is a
   * string type and is intended to store the date and time of the incident. It is typically filled using
   * a date and time picker interface where the user can select the specific date and time of the
   * incident.
   */
  incidentDate: string;

  /**
   * The `listOfStudents` property in the `IIncidentReports`
   * type is an array of objects of type `IStudents`. It is used for selecting multiple students involved
   * in the incident and is typically implemented with an autocomplete feature for ease of selection.
   */
  listOfStudents: IStudents[];

  /**
   * The `teacher` property in the `IIncidentReports` type represents a
   * staff member involved in the incident. It is an object of type `IStaff` and is typically selected
   * using an autocomplete feature.
   */
  teacher: IStaff;

  /**
   * The `incidentType` property in the `IIncidentReports` type is an
   * array of strings that can be selected from a list of options using an autocomplete feature. Multiple
   * options can be selected for this property.
   */
  incidentType: string[];

  /**
   * The "location" property in the IIncidentReports type is a string type
   * field where you can input the location of the incident. It is a text field where you can provide a
   * description of where the incident took place.
   */
  location: string;

  /**
   * The `status` property in the `IIncidentReports` type is a
   * field that can only have one of two values: 'open' or 'closed'. It is a select field where the user
   * can choose between these two options.
   */
  status: 'open' | 'closed';

  /**
   * The `description` property in the `IIncidentReports` type is a
   * string type that represents a description of the incident. It is a text field where you can provide
   * details or information about the incident that occurred.
   */
  description: string;
};
