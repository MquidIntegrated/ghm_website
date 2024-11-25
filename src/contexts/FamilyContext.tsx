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
  paymentTotal: number;
  setFamilySize: (size: string) => void;
  setPersons: (persons: PersonDetails[]) => void;
  setPaymentTotal: (total: number) => void;
}

const FamilyContext = createContext<FamilyContextType | undefined>(undefined);

export const FamilyProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [familySize, setFamilySize] = useState<string>("Individual");
  const [persons, setPersons] = useState<PersonDetails[]>([]);
  const [paymentTotal, setPaymentTotal] = useState<number>(0); // Added paymentTotal

  return (
    <FamilyContext.Provider
      value={{
        familySize,
        persons,
        paymentTotal,
        setFamilySize,
        setPersons,
        setPaymentTotal,
      }}
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
