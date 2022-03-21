import React from "react";

import PersonalInformation from "./components/PageHeader/PersonalInformation";
import Contacts from "./components/PageHeader/Contacts";
import InformationWithDetails from "./components/InformationWithDetails/InformationWithDetails";

import { StyledPage } from "../../styles/common";

const ProfilePage = () => {
  return (
    <StyledPage elevation={2}>
      <PersonalInformation />
      <Contacts />
      <InformationWithDetails />
    </StyledPage>
  );
};

export default ProfilePage;
