import React from "react";
import { StyledPage } from "../../styles/common";
import PersonalInformation from "./components/PageHeader/PersonalInformation";
import Contacts from "./components/PageHeader/Contacts";
import InformationWithDetails from "./components/InformationWithDetails/InformationWithDetails";

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
