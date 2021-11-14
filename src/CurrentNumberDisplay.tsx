import * as React from "react";

export interface ICurrentNumberDisplayProps {
  displayString: string;
}

export interface ICalculatorDisplayState {}

export default class CurrentNumberDisplay extends React.Component<
  ICurrentNumberDisplayProps,
  ICalculatorDisplayState
> {
  constructor(props: ICurrentNumberDisplayProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div className="CalculatorDisplay">{this.props.displayString}</div>;
  }
}
