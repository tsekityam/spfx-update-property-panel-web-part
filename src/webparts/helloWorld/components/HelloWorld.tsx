import * as React from "react";
import styles from "./HelloWorld.module.scss";
import { IHelloWorldProps } from "./IHelloWorldProps";
import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <WebPartTitle
        displayMode={this.props.displayMode}
        title={this.props.title}
        updateProperty={this.props.updateProperty}
      />
    );
  }
}
