import React, { createContext, useContext, useEffect, useState } from 'react';
import { Realm, createRealmContext } from '@realm/react';
import { User } from './../app/schemas/Usuario';


interface RealmContextType {
  realm: Realm | null;
  users: Realm.Results<User> | [];
  setUsers: React.Dispatch<React.SetStateAction<Realm.Results<User> | []>>;
}


const RealmContext = createContext<RealmContextType | null>(null);


export const RealmProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [realm, setRealm] = useState<Realm | null>(null);
  const [users, setUsers] = useState<Realm.Results<User> | []>([]);

  useEffect(() => {
    
    const realmInstance = new Realm({
      path: "myrealm",
      schema: [User.schema],
    });

    setRealm(realmInstance);

   
    const usersList = realmInstance.objects<User>("User");
    setUsers(usersList);

   
    return () => {
      if (realmInstance) {
        realmInstance.close();
        setRealm(null);
      }
    };
  }, []);

  return (
    <RealmContext.Provider value={{ realm, users, setUsers }}>
      {children}
    </RealmContext.Provider>
  );
};

// Hook personalizado para usar el contexto de Realm
export const useRealm = (): RealmContextType => {
  const context = useContext(RealmContext);
  if (!context) {
    throw new Error("useRealm debe ser usado dentro de un RealmProvider");
  }
  return context;
};
