import React, {createContext, useContext, useState} from "react";

export interface PersonDetails {
  name: string;
  relationship: string;
  age: number;
  plan: string;
  price: number;
}

interface FamilyContextType {
  familySize: string;
  persons: PersonDetails[];
  setFamilySize: (size: string) => void;
  setPersons: (persons: PersonDetails[]) => void;
}

const FamilyContext = createContext<FamilyContextType | undefined>(undefined);

export const FamilyProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [familySize, setFamilySize] = useState<string>("Individual");
  const [persons, setPersons] = useState<PersonDetails[]>([]);

  return (
    <FamilyContext.Provider
      value={{familySize, persons, setFamilySize, setPersons}}
    >
      {children}
    </FamilyContext.Provider>
  );
};

export const useFamilyContext = (): FamilyContextType => {
  const context = useContext(FamilyContext);
  if (!context)
    throw new Error("useFamilyContext must be used within FamilyProvider");
  return context;
};
