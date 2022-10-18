import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const usePasswordToggle = () => {
  const [visible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility((visibility) => !visibility);
  };

  const Icon = visible ? (
    <VisibilityOffIcon onClick={toggleVisibility} />
  ) : (
    <VisibilityIcon onClick={toggleVisibility} />
  );
  const InputType = visible ? "text" : "password";
  return [InputType, Icon];
};
export default usePasswordToggle;
