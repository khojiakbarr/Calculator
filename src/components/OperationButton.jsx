import React from "react";
import { Actions } from "../App";
export default function OparationButton({ dispatch, operation }) {
  return (
    <button onClick={() => dispatch({ type: Actions.CHOOSE_OPERATION,payload:{operation} })}>
      {operation}
    </button>
  );
}
