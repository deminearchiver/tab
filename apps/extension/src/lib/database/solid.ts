import { IDBPDatabase, openDB } from "idb";
import { createSingletonRoot } from "@solid-primitives/rootless"
import { Signal, createMemo, untrack } from "solid-js";
import { AsyncStorage, AsyncStorageWithOptions, makePersisted } from "@solid-primitives/storage";
import { SetStoreFunction, Store, createStore, reconcile } from "solid-js/store";
// import { createStore as createIdbStore } from "idb-keyval";


type CreateDatabaseStoreOptions<T extends object = {}> = {
  database: IDBDatabase;
  name: string;
}
const createDatabaseStore = <T extends object = {}>(
  store: [get: Store<T>, set: SetStoreFunction<T>],
  options: CreateDatabaseStoreOptions<T>
): [get: Store<T>, set: SetStoreFunction<T>] => {
  const db = options.database;
  const name = options.name;
  const objectStore = db.createObjectStore(name);
  
  return [
    store[0],
    (...args: any) => {
      (store[1])(args);
      const value = untrack(() => store[0]);
      console.log(value);
    }
  ];
}
