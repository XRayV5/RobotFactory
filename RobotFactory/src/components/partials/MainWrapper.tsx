import * as React from "react";
import { style } from "typestyle";

import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {MuiThemeProvider, lightBaseTheme} from "material-ui/styles";
const lightMuiTheme = getMuiTheme(lightBaseTheme);

/* typestyle css*/
const main = style({
  minHeight: "800px",
  margin: 0,
  padding: 0,
  display: "flex",
  flexFlow: "row"
});

// const headerImg = style({
//     height: "90px",
//     margin:"1% 0 1% 3%",
// })

const ends = style({
  display: "block",
  margin: "4px",
  padding: "5px",
  minHeight: "100px",
  background: "#ffe512"
});

const base = style({
  font: "18px Helvetica",
  fontFamily: "Roboto, sans-serif"
});

interface WrapperProps {
  children: any;
}

export const MainWrapper = (props: WrapperProps) => (
    <MuiThemeProvider muiTheme={lightMuiTheme}>
        <div className={base}>
            <header className={ends} />
            <div className={main}>{props.children}</div>
            <footer className={ends}>
            <div style={{ padding: "3%", fontSize: "14px" }}>
                Copyright © 2018 - All Rights Reserved
            </div>
            </footer>
        </div>
    </MuiThemeProvider>
);
