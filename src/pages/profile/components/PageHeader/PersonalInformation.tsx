import React, { memo } from "react";
import { Typography } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ToggleThemeMode from "../../../../components/ToggleThemeMode/ToggleThemeMode";

import {
  ProfileInformationContainer,
  ProfileName,
  StyledAvatar,
  ToggleModeButton,
} from "../../styled";
import { useProfileContext } from "../../../../containers/Profile/context";
import { getExperience } from "../../../../utils/common";

const PersonalInformation = () => {
  const {
    personalInformation: { name, position, startDate, aboutMe },
  } = useProfileContext();

  return (
    <ProfileInformationContainer>
      <StyledAvatar src={require("../../../../assets/avatar.jpg")} />
      <ProfileName>
        <Typography variant="h4" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {position} - {getExperience(startDate)}{" "}
          <RocketLaunchIcon color="primary" />
        </Typography>
        <Typography variant="body2" gutterBottom>
          {aboutMe}
        </Typography>
      </ProfileName>
      <ToggleModeButton>
        <ToggleThemeMode />
      </ToggleModeButton>
    </ProfileInformationContainer>
  );
};

export default memo(PersonalInformation);
