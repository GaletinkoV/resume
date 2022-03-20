import dayjs from "dayjs";

export const getExperience = (startDate: string | Date) => {
  const experienceInMonths = dayjs(new Date()).diff(startDate, "months");

  if (experienceInMonths % 12 === 0) {
    return `${Math.floor(experienceInMonths / 12)} year${
      experienceInMonths === 12 ? "" : "s"
    }`;
  } else if (experienceInMonths < 12) {
    return `${experienceInMonths} months`;
  }

  return `${Math.floor(experienceInMonths / 12)} years ${
    experienceInMonths % 12
  } months`;
};

export const deleteValueFromArray = (array: unknown[], value: unknown) => {
  const index = array.findIndex((item) => item === value);

  if (index !== -1) {
    array.splice(index, 1);
  }
};
