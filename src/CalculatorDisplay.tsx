import * as React from "react";
import { Operation, OperationToText } from "./Calculator";

export interface ICalculatorDisplayProps {
  leftNumber: string;
  op: Operation;
  rightNumber: string;
}

export interface ICalculatorDisplayState {}

export default class CalculatorDisplay extends React.Component<
  ICalculatorDisplayProps,
  ICalculatorDisplayState
> {
  constructor(props: ICalculatorDisplayProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div className="CalculatorDisplay">
        {this.props.leftNumber +
          " " +
          OperationToText(this.props.op) +
          " " +
          this.props.rightNumber}
      </div>
    );
  }
}
