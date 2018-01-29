import * as React from "react";
import RaisedButton from "material-ui/RaisedButton";
import RecycleIcon from "material-ui/svg-icons/navigation/refresh";
import SendIcon from "material-ui/svg-icons/maps/flight";
import { style } from "typestyle";
import { RobotLookUp } from "../../models";
import { RobotCard } from "./Card";
import { listCommon } from "../../style/";

interface TitleProps {
  title?: string;
}

const listTitle = style({ fontSize: "20px", textAlign: "center" });

const ListTitle = ({ title }: TitleProps) => (
  <h3 className={listTitle}>{title}</h3>
);

interface ListProps {
  customStyle: { [key: string]: number | string };
  title?: string;
  robots?: RobotLookUp;
  ids?: string[];
  listAction?: () => any;
  recycled?: boolean;
}

export const List = (props: ListProps) => {
  const className = style({ ...listCommon, ...props.customStyle });
  const cards = (props.ids || []).map((id: string) => (
    <RobotCard
      name={props.robots[id].name}
      id={id}
      configuration={props.robots[id].configuration}
      statuses={props.robots[id].statuses}
    />
  ));
  return (
    <div className={className}>
      <ListTitle title={props.title} />
      {props.title === "Ready To Ship" &&
        props.ids.length > 0 && (
          <RaisedButton
            label="Send Shipment"
            icon={<SendIcon />}
            onClick={props.listAction}
            style={{ width: "100%", marginBottom: "8px" }}
          />
        )}
      {props.title === "Recycled" && !props.recycled ? (
        <RaisedButton
          label="QA & Recycle"
          icon={<RecycleIcon />}
          onClick={props.listAction}
          style={{ width: "100%" }}
        />
      ) : (
        cards
      )}
    </div>
  );
};
