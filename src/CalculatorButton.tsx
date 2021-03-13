import * as React from "react";
import Button from "react-bootstrap/Button";

export interface CalculatorButtonProps {
  myNumber: number;
  DisplayNumber: string;
  ButtonPressedCallback: (num: number) => void;
}

export interface CalculatorButtonState {}

export class CalculatorButton extends React.Component<
  CalculatorButtonProps,
  CalculatorButtonState
> {
  public EqualsButton = -1;

  constructor(props: CalculatorButtonProps) {
    super(props);
    this.state = {};
  }

  OnClick() {
    this.props.ButtonPressedCallback(this.props.myNumber);
  }

  public render() {
    return (
      <Button
        className="CalculatorButton"
        onClick={() => this.OnClick()}
        variant="dark"
      >
        {this.props.DisplayNumber}
      </Button>
    );
  }
}
