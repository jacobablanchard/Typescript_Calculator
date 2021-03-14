import * as React from "react";
import { CalculatorButton } from "./CalculatorButton";
import { OperationType } from "./Enums/OperationType";
import { OperationButton } from "./OperationButton";

export interface ICalculatorButtonsProps {
  ButtonPressedCallback: (num: number) => void;
  OperationPressedCallback: (op: OperationType) => void;
}

export interface ICalculatorButtonsState {}

export default class CalculatorButtons extends React.Component<
  ICalculatorButtonsProps,
  ICalculatorButtonsState
> {
  constructor(props: ICalculatorButtonsProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <table className="CalculatorButtons">
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <OperationButton
                ButtonPressedCallback={this.props.OperationPressedCallback}
                DisplayString="🆑"
                myOperationType={OperationType.Clear}
              />
            </td>
          </tr>
          <tr>
            <td>
              <CalculatorButton
                myNumber={1}
                DisplayNumber="1"
                ButtonPressedCallback={this.props.ButtonPressedCallback}
              />
            </td>
            <td>
              <CalculatorButton
                myNumber={2}
                DisplayNumber="2"
                ButtonPressedCallback={this.props.ButtonPressedCallback}
              />
            </td>
            <td>
              <CalculatorButton
                myNumber={3}
                DisplayNumber="3"
                ButtonPressedCallback={this.props.ButtonPressedCallback}
              />
            </td>
            <td>
              <OperationButton
                DisplayString="➕"
                myOperationType={OperationType.Add}
                ButtonPressedCallback={this.props.OperationPressedCallback}
              />
            </td>
          </tr>
          <tr>
            <td>
              <CalculatorButton
                myNumber={4}
                DisplayNumber="4"
                ButtonPressedCallback={this.props.ButtonPressedCallback}
              />
            </td>
            <td>
              <CalculatorButton
                myNumber={5}
                DisplayNumber="5"
                ButtonPressedCallback={this.props.ButtonPressedCallback}
              />
            </td>
            <td>
              <CalculatorButton
                myNumber={6}
                DisplayNumber="6"
                ButtonPressedCallback={this.props.ButtonPressedCallback}
              />
            </td>
            <td>
              <OperationButton
                DisplayString="➖"
                myOperationType={OperationType.Subtract}
                ButtonPressedCallback={this.props.OperationPressedCallback}
              />
            </td>
          </tr>
          <tr>
            <td>
              <CalculatorButton
                myNumber={7}
                DisplayNumber="7"
                ButtonPressedCallback={this.props.ButtonPressedCallback}
              />
            </td>
            <td>
              <CalculatorButton
                myNumber={8}
                DisplayNumber="8"
                ButtonPressedCallback={this.props.ButtonPressedCallback}
              />
            </td>
            <td>
              <CalculatorButton
                myNumber={9}
                DisplayNumber="9"
                ButtonPressedCallback={this.props.ButtonPressedCallback}
              />
            </td>
            <td>
              <OperationButton
                DisplayString="✖"
                myOperationType={OperationType.Multiply}
                ButtonPressedCallback={this.props.OperationPressedCallback}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <CalculatorButton
                myNumber={0}
                DisplayNumber="0"
                ButtonPressedCallback={this.props.ButtonPressedCallback}
              />
            </td>
            <td>
              <OperationButton
                DisplayString="➗"
                myOperationType={OperationType.Divide}
                ButtonPressedCallback={this.props.OperationPressedCallback}
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
    /*
    
    */
  }
}
