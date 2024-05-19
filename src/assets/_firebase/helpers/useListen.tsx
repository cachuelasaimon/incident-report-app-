import { useEffect, useState } from 'react';

import { DocumentSnapshot, onSnapshot } from 'firebase/firestore';

import { collections, firestore } from '../collections';
import { ICollectionKeys } from './useFirestore';

export interface IFilterParams<T> {
  key: keyof T;
  value: string | number | object;
}
export interface IListenProps<T> {
  collectionName: ICollectionKeys;
  filters?: IFilterParams<T>[];
}

/**
 * @param collectionRef - firebase CollectionReference, object can be used for adding documents, getting document references, and querying for documents (using query).
 * @returns { docs, isLoading } Array of items in the type of generic provided and a loading state for rendering loading UI
 */

export const useListen = <T,>({ collectionName, filters }: IListenProps<T>) => {
  const [docs, setDocs] = useState<T[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const collection = collections[collectionName];

  useEffect(() => {
    const fetch = async () => {
      if (!collection) {
        return;
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSnapshot(collection, (snapshot) => {
          // const source = doc.metadata.hasPendingWrites ? "Local" : "Server";

          // Filter Documents
          if (!!filters && filters.length > 0) {
            let filteredDocs: T[] | null = [];
            filteredDocs = snapshot.docs
              .map((doc: DocumentSnapshot) => ({
                id: doc.id,
                ...doc.data(),
                // doc,
              }))
              // @ts-expect-error - idk
              .filter((doc: T) =>
                filters.some((filter) => doc[filter.key] === filter.value)
              ) as T[];
            setDocs(filteredDocs);
          } else {
            setDocs(
              snapshot.docs.map((doc: DocumentSnapshot) => ({
                id: doc.id,
                ...doc.data(),
                doc,
              })) as T[]
            );
          }
          // console.log(
          //   "data: ",
          //   snapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))
          // );
          setIsLoading(false);
        });
      }
    };

    if (isLoading) fetch();
  }, [collectionName, collection, isLoading, filters]);

  return { docs, isLoading };
};
