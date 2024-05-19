import { getFirestore, collection } from 'firebase/firestore';
import { app } from '../config';

export const firestore = getFirestore(app);
const servers = {
  development: 'databases/development',
  production: 'databases/production',
};

const database = `${servers.development}`;

/**
 * Collections:
 * 1. Users
 * 2. Students
 * 3. Staff
 * 4. Incident Reports
 */
export const collections = {
  users: collection(firestore, `${database}/users`),
  students: collection(firestore, `${database}/students`),
  staff: collection(firestore, `${database}/staff`),
  incidentReports: collection(firestore, `${database}/incidentReports`),
};

export type ICollections = typeof collections;
