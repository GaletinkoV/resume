import React, { useMemo } from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ReactComponent as UpWorkIcon } from "../../../../icons/upwork-icon.svg";

import { ContactItem, ContactsContainer, StyledDivider } from "../../styled";
import { TypographyWithLink } from "../../../../styles/theme";
import { useProfileContext } from "../../../../containers/Profile/context";

const Contacts = () => {
  const { contacts } = useProfileContext();
  const contactList = useMemo(
    () => [
      {
        value: contacts.mail,
        key: "mail",
        Icon: <EmailIcon color="primary" />,
      },
      {
        value: contacts.phoneNumber,
        key: "phoneNumber",
        Icon: <PhoneIphoneIcon color="primary" />,
      },
      {
        value: contacts.location,
        key: "location",
        Icon: <LocationOnIcon color="primary" />,
      },
      {
        value: "Linkedin",
        key: "linkedin",
        link: contacts.linkedin,
        Icon: <LinkedInIcon color="primary" />,
      },
      {
        value: "Upwork",
        key: "upwork",
        link: contacts.upwork,
        Icon: <UpWorkIcon fill="#00A157" width={24} height={24} />,
      },
      {
        value: "GitHub",
        key: "github",
        link: contacts.github,
        Icon: <GitHubIcon color="primary" />,
      },
    ],
    [contacts]
  );

  return (
    <>
      <StyledDivider />
      <ContactsContainer>
        {contactList.map((item) => {
          const textProps = item.link
            ? { target: "_blank", href: item.link, component: "a" }
            : {};

          return (
            <ContactItem isClickable={!!item.link} key={item.key}>
              {item.Icon}
              <TypographyWithLink {...textProps}>
                {item.value}
              </TypographyWithLink>
            </ContactItem>
          );
        })}
      </ContactsContainer>
      <StyledDivider />
    </>
  );
};

export default Contacts;
