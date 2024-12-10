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
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  setFamilySize: (size: string) => void;
  setPersons: (persons: PersonDetails[]) => void;
  setPaymentTotal: (total: number) => void;
  setFullName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phone: string) => void;
  setAddress: (address: string) => void;
}

const FamilyContext = createContext<FamilyContextType | undefined>(undefined);

export const FamilyProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [familySize, setFamilySize] = useState<string>("Individual");
  const [persons, setPersons] = useState<PersonDetails[]>([]);
  const [paymentTotal, setPaymentTotal] = useState<number>(0); // Added paymentTotal
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  return (
    <FamilyContext.Provider
      value={{
        familySize,
        persons,
        paymentTotal,
        fullName,
        email,
        phoneNumber,
        address,
        setFamilySize,
        setPersons,
        setPaymentTotal,
        setFullName,
        setEmail,
        setPhoneNumber,
        setAddress,
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
