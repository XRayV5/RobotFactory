import * as React from "react";
import { Chip, Avatar } from "material-ui";
import Close from "material-ui/svg-icons/navigation/close";
import Check from "material-ui/svg-icons/navigation/check";
import Error from "material-ui/svg-icons/alert/error";
import Fire from "material-ui/svg-icons/social/whatshot";
import Water from "material-ui/svg-icons/action/invert-colors";
import { blue300 } from "material-ui/styles/colors";

interface ConfProps {
  property: string;
  value: string | number | boolean;
}

const getAvatar = (value: string | number | boolean) => {
  switch (typeof value) {
    case "number":
      return <Avatar>{value}</Avatar>;
    case "boolean":
      return (
        <Avatar
          color={value ? "green" : "red"}
          icon={value ? <Check /> : <Close />}
        />
      );
    case "string":
      return <Avatar backgroundColor={value.toString()} />;
    default:
      return null;
  }
};

export const ChipConf = ({ property, value }: ConfProps) => {
  return (
    <Chip style={{ marginBottom: "4px" }}>
      {getAvatar(value)}
      {property}
    </Chip>
  );
};

const getStatAvatar = (value?: string) => {
  if(!value) return <Avatar
    color="green"
    icon={<Check />}
  />
  switch (value) {
    case "on fire":
      return <Avatar color={"red"} icon={<Fire />} />;
    case "extinguished":
      return <Avatar color={blue300} icon={<Water />} />;
    default:
      return <Avatar color={"red"} icon={<Error />} />;
  }
};

interface ChipStatusProp {
  status?: string;
}

export const ChipStatus = ({ status }: ChipStatusProp) => (
  <Chip style={{ marginBottom: "4px" }}>
    {getStatAvatar(status)}
    {status || 'Good'}
  </Chip>
);
