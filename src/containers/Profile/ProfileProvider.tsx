import React, { FC } from "react";
import { ProfileType } from "../../types/profile";
import { ProfileContext } from "./context";

interface ProfileProviderProps {
  value: ProfileType;
}

const ProfileProvider: FC<ProfileProviderProps> = ({ value, children }) => {
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export default ProfileProvider;
