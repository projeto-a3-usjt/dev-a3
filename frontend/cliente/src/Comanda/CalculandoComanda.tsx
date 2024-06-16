// CalculationContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface CalculationContextProps {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}

const CalculationContextComanda = createContext<CalculationContextProps | undefined>(undefined);

export const CalculationProvider = ({ children }: { children: ReactNode }) => {
  const [total, setTotal] = useState(0);

  return (
    <CalculationContextComanda.Provider value={{ total, setTotal }}>
      {children}
    </CalculationContextComanda.Provider>
  );
};

export const useCalculation = () => {
  const context = React.useContext(CalculationContextComanda);
  if (context === undefined) {
    throw new Error('useCalculation must be used within a CalculationProvider');
  }
  return context;
};
