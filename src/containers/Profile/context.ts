import { createContext, useContext } from "react";
import { ProfileType } from "../../types/profile";

export const ProfileContext = createContext<ProfileType>({} as ProfileType);

export const useProfileContext = (): ProfileType => {
  const context = useContext(ProfileContext);

  if (context === undefined) {
    throw Error("The component is now wrapped by ProfileContext");
  }

  return context;
};
