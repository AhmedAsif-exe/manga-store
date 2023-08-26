import { useReducer } from "react";

const Reducer = (state, action) => {
  if (action.type === "INPUT_VALUE")
    return { value: action.value, touched: state.touched };
  if (action.type === "BLUR_EVENT")
    return { value: state.value, touched: action.touched };
  if (action.type === "RESET_EVENT") return { value: "", touched: false };
  return { value: "", touched: false };
};
const useInput = (validationFunction) => {
  const [name, dispatchFunction] = useReducer(Reducer, {
    value: "",
    touched: false,
  });

  let valueIsValid = validationFunction(name.value);

  const onChangeHandler = (event) => {
    dispatchFunction({ type: "INPUT_VALUE", value: event.target.value });
  };

  const onBlurHandler = (event) => {
    dispatchFunction({ type: "BLUR_EVENT", touched: true });
  };

  const reset = () => {
    dispatchFunction({ type: "RESET_EVENT" });
  };

  let hasError = !valueIsValid && name.touched;
  const { value } = name;
  return {
    value,
    valueIsValid,
    hasError,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput;
