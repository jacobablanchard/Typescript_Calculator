import * as React from "react";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorDisplay from "./CalculatorDisplay";

export interface IAppProps {}

export interface IAppState {
  operand1: number;
  operand1Text: string;
  operand2: number;
  operand2Text: string;
  Operation: Operation;
  CurrentState: StateChart;
}

enum StateChart {
  FirstOperand,
  SecondOperand,
}

export enum Operation {
  Add = 0,
  Subtract,
  Multiply,
  Divide,
  None,
}

export function OperationToText(op: Operation): string {
  switch (op) {
    case Operation.Add:
      return "+";
    case Operation.Subtract:
      return "-";
    case Operation.Multiply:
      return "x";
    case Operation.Divide:
      return "/";
    default:
      return "";
  }
}

export default class Calculator extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.OnButtonPressed = this.OnButtonPressed.bind(this);
    this.state = {
      operand1: 0,
      operand1Text: "",
      operand2: 0,
      operand2Text: "",
      Operation: Operation.None,
      CurrentState: StateChart.FirstOperand,
    };
  }

  private OnButtonPressed(buttonPressed: number) {
    console.log(buttonPressed);
    this.setState((state) => {
      return { operand1Text: state.operand1Text + buttonPressed.toString() };
    });
  }

  public render() {
    return (
      <div className="Calculator">
        <CalculatorDisplay
          leftNumber={this.state.operand1Text}
          rightNumber={this.state.operand2Text}
          op={this.state.Operation}
        />
        <CalculatorButtons ButtonPressedCallback={this.OnButtonPressed} />
      </div>
    );
  }
}
