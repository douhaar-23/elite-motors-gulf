import { createContext, useContext } from "react";

export type DemoData = {
  slug: string;

  nameAr: string;
  nameEn: string;

  phone: string;
  whatsapp: string;
  email: string;

  country: string;

  logoSquare: string;
  logoHorizontal: string;

  theme: {
    primary: string;
    primarySoft: string;
    background: string;
    surface: string;
    foreground: string;
  };
};

const DemoContext = createContext<DemoData | null>(null);

export function DemoProvider({
  value,
  children,
}: {
  value: DemoData;
  children: React.ReactNode;
}) {
  return (
    <DemoContext.Provider value={value}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const demo = useContext(DemoContext);

  if (!demo) {
    throw new Error("useDemo must be used inside DemoProvider");
  }

  return demo;
}