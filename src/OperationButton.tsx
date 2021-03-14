import * as React from "react";
import Button from "react-bootstrap/Button";
import { OperationType } from "./Enums/OperationType";

export interface OperationButtonProps {
  DisplayString: string;
  myOperationType: OperationType;
  ButtonPressedCallback: (num: number) => void;
}

export interface OperationButtonState {}

export class OperationButton extends React.Component<
  OperationButtonProps,
  OperationButtonState
> {
  public EqualsButton = -1;

  constructor(props: OperationButtonProps) {
    super(props);
    this.state = {};
  }

  OnClick() {
    this.props.ButtonPressedCallback(this.props.myOperationType);
  }

  public render() {
    return (
      <Button
        className="CalculatorButton"
        onClick={() => this.OnClick()}
        variant="dark"
      >
        {this.props.DisplayString}
      </Button>
    );
  }
}
