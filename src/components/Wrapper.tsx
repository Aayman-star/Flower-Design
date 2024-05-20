import React, { ReactNode, FC } from "react";

type Props = {
  children: ReactNode;
};

const Wrapper: FC<Props> = ({ children }) => {
  return (
    <div className="max-w-[90rem] mx-auto h-[1024px] bg-gradient-to-b from-[#C0E4C9] to-[#E0F5D4]">
      {children}
    </div>
  );
};

export default Wrapper;
