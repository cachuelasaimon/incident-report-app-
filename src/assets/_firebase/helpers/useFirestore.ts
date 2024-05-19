import {
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  addDoc,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import { collections } from '../collections';
import { IStaff, IStudents } from 'src/types';
import { IIncidentReport } from 'src/types/IIncidentReport';

export type IUsers = {
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

/**
 * The above TypeScript code defines a type IData with specific properties and exports a type
 * ICollectionKeys representing the keys of IData.
 */
type IData = {
  /**
   * The `users` property in the `IData` type represents a collection of user
   * data.
   */
  users: IUsers;

  /**
   * The `students` property in the `IData` type represents a collection
   * of student data.
   */
  students: IStudents;

  /**
   * The `staff` property in the `IData` type represents a collection of data
   * related to staff members.
   */
  staff: IStaff;

  /**
   * The `incidentReports` property is a part of the
   * `IData` type and represents a collection of incident reports in the data structure.
   */
  incidentReports: IIncidentReport;
};

/**
 * ICollectionKeys is a type representing the keys of IData.
 */
export type ICollectionKeys = keyof IData;

/**
 * The type `FirebaseMethods` defines methods for interacting with different collections in Firebase.
 * The keys of the type are defined by `ICollectionKeys`,
 * and for each key `K`, there are three methods available.
 */
export type FirebaseMethods = {
  [K in ICollectionKeys]: {
    /**
     * `setDoc`: A method for setting a document in the collection with the specified data and ID.
     */
    setDoc: ({ data, id }: { data: IData[K]; id: string }) => Promise<void>;

    /**
     * `getDoc`: A method for retrieving a document from the collection based on the specified ID.
     */
    getDoc: ({ id }: { id: string }) => Promise<DocumentSnapshot<DocumentData>>;

    /**
     * `addDoc`: A method for adding a new document to the collection with the specified data.
     */
    addDoc: (data: IData[K]) => Promise<DocumentReference<DocumentData>>;
  };
};

/**
 * The `useFirestore` function dynamically generates Firebase collection methods based on a predefined
 * set of collection keys.
 * @returns The `useFirebase` function returns an object containing methods for interacting with
 * Firebase collections. The methods include `setDoc`, `getDoc`, and `addDoc` for performing operations
 * on documents within the specified collection keys. The function dynamically generates these methods
 * based on the provided collection keys.
 */
export const useFirestore = (): FirebaseMethods => {
  /**
   * The `collectionMethods` function dynamically generates Firebase collection methods based on a predefined
   * set of collection keys.
   */
  const collectionMethods = (collectionKey: ICollectionKeys) => ({
    /**
     * The `setDoc` method is for updating a document in the collection with the specified data and ID.
     */
    setDoc: async ({
      data,
      id,
    }: {
      data: IData[typeof collectionKey];
      id: string;
    }) => await setDoc(doc(collections[collectionKey], id), data),

    /**
     * The `getDoc` method is for retrieving a document from the collection based on the specified ID.
     */
    getDoc: async ({ id }: { id: string }) =>
      await getDoc(doc(collections[collectionKey], id)),

    /**
     * The `addDoc` method is for adding a new document to the collection with the specified data.
     */
    addDoc: async (data: IData[typeof collectionKey]) =>
      await addDoc(collections[collectionKey], data),
  });

  // Dynamically generate the properties
  const firebaseMethods: Partial<
    Record<ICollectionKeys, ReturnType<typeof collectionMethods>>
  > = {};
  for (const key in collections) {
    firebaseMethods[key as ICollectionKeys] = collectionMethods(
      key as ICollectionKeys
    );
  }

  /**
   * The `useFirebase` function returns an object containing methods for interacting with
   * Firebase collections. The methods include `setDoc`, `getDoc`, and `addDoc` for performing operations
   * on documents within the specified collection keys. The function dynamically generates these methods
   * based on the provided collection keys.
   */
  return firebaseMethods as unknown as FirebaseMethods;
};
