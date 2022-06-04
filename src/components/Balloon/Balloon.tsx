import React from "react";

import { B } from "./Balloon.style";

const Balloon = ({ text }: Balloon) => {
  return (
    <B.Container testID="balloon">
      <B.Text>{text}</B.Text>
    </B.Container>
  );
};

export default Balloon;
