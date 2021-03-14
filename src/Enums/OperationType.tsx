export enum OperationType {
  Add = 0,
  Subtract,
  Multiply,
  Divide,
  Equals,
  Clear,
  None,
}

export function OperationToText(op: OperationType): string {
  switch (op) {
    case OperationType.Add:
      return "➕";
    case OperationType.Subtract:
      return "➖";
    case OperationType.Multiply:
      return "✖";
    case OperationType.Divide:
      return "➗";
    default:
      return "";
  }
}
