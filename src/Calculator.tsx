import * as React from "react";
import CalculatorButtons from "./CalculatorButtons";
import CurrentNumberDisplay from "./CurrentNumberDisplay";
import { OperationType, OperationToText } from "./Enums/OperationType";
import { OperationButton } from "./OperationButton";

export interface IAppProps {}

export interface IAppState {
  operand1: number;
  operand1Text: string;
  operand2: number;
  operand2Text: string;
  Operation: OperationType;
  CurrentState: StateChart;
}

enum StateChart {
  FirstOperand,
  SecondOperand,
}

export default class Calculator extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.OnNumberButtonPressed = this.OnNumberButtonPressed.bind(this);
    this.OnOperationButtonPressed = this.OnOperationButtonPressed.bind(this);
    this.state = {
      operand1: 0,
      operand1Text: "",
      operand2: 0,
      operand2Text: "",
      Operation: OperationType.None,
      CurrentState: StateChart.FirstOperand,
    };
  }

  private OnNumberButtonPressed(buttonPressed: number) {
    if (process.env.NODE_ENV === "development") {
      console.log("Number: " + buttonPressed.toString());
    }
    if (this.state.CurrentState === StateChart.FirstOperand) {
      this.setState((state) => {
        return { operand1Text: state.operand1Text + buttonPressed.toString() };
      });
    } else if (this.state.CurrentState === StateChart.SecondOperand) {
      this.setState((state) => {
        return { operand2Text: state.operand2Text + buttonPressed.toString() };
      });
    } else {
      throw new Error("Unknown state '" + StateChart[this.state.CurrentState]);
    }
  }

  private OnOperationButtonPressed(operation: OperationType) {
    if (process.env.NODE_ENV === "development") {
      console.log("Operation: " + OperationType[operation]);
    }
    switch (operation) {
      case OperationType.Equals: {
        // Only do something if we're on the second operand
        if (this.state.CurrentState === StateChart.SecondOperand) {
        }
        break;
      }
      case OperationType.Clear: {
        this.setState({
          operand1: 0,
          operand1Text: "",
          operand2: 0,
          operand2Text: "",
          Operation: OperationType.None,
          CurrentState: StateChart.FirstOperand,
        });
        break;
      }
      default: {
        this.setState({
          Operation: operation,
          CurrentState: StateChart.SecondOperand,
          operand2: 0,
          operand2Text: "",
        });
        break;
      }
    }
  }

  public render() {
    return (
      <div className="Calculator">
        <CurrentNumberDisplay
          displayString={
            this.state.operand1Text +
            " " +
            OperationToText(this.state.Operation) +
            " " +
            this.state.operand2Text
          }
        />
        <CurrentNumberDisplay
          displayString={
            this.state.CurrentState === StateChart.FirstOperand // If we're on the first operand
              ? this.state.operand1Text // Show the first operand
              : this.state.CurrentState === StateChart.SecondOperand &&
                this.state.operand2Text === "" // If we're on the second operand, and we have no number
              ? OperationToText(this.state.Operation) // Show the Operation
              : this.state.operand2Text // Otherwise, show the second operand
          }
        />
        <CalculatorButtons
          ButtonPressedCallback={this.OnNumberButtonPressed}
          OperationPressedCallback={this.OnOperationButtonPressed}
        />
        <p></p>
        <OperationButton
          ButtonPressedCallback={this.OnOperationButtonPressed}
          myOperationType={OperationType.Equals}
          DisplayString="Calculate"
        />
      </div>
    );
  }
}
