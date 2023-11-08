// MyContextProvider.tsx
import React, { ReactNode, useContext, useState } from 'react';

type AccountType = 'investor' | 'artist' | 'business' | 'admin';

interface AppContextType {
  isCommentBoxOpen: boolean;
  setIsCommentBoxOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isPromoteBoxOpen: boolean;
  setIsPromoteBoxOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isValyouSongDrawerOpen: boolean;
  setIsValyouSongDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  insideDrawerStatus: boolean;
  setInsideDrawerStatus: React.Dispatch<React.SetStateAction<boolean>>;
  accountSwitcherStatus: boolean;
  setAccountSwitcherStatus: React.Dispatch<React.SetStateAction<boolean>>;
  activeAccountType: AccountType;
  setActiveAccountType: React.Dispatch<React.SetStateAction<AccountType>>;
}

export const AppContext = React.createContext<AppContextType | undefined>(
  undefined
);

export default function AppContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState<boolean>(false);
  const [isPromoteBoxOpen, setIsPromoteBoxOpen] = useState<boolean>(false);
  const [isValyouSongDrawerOpen, setIsValyouSongDrawerOpen] =
    useState<boolean>(false);
  const [insideDrawerStatus, setInsideDrawerStatus] = useState<boolean>(false);
  const [accountSwitcherStatus, setAccountSwitcherStatus] =
    useState<boolean>(false);
  const [activeAccountType, setActiveAccountType] =
    useState<AccountType>('artist');

  return (
    <AppContext.Provider
      value={{
        isCommentBoxOpen,
        setIsCommentBoxOpen,
        isPromoteBoxOpen,
        setIsPromoteBoxOpen,
        isValyouSongDrawerOpen,
        setIsValyouSongDrawerOpen,
        insideDrawerStatus,
        setInsideDrawerStatus,
        accountSwitcherStatus,
        setAccountSwitcherStatus,
        activeAccountType,
        setActiveAccountType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
