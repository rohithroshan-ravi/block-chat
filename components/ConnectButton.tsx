"use client";

import { Button } from "./ui/button";
import { useAppKit } from "@reown/appkit/react";

export const ConnectButton = () => {
  const { open } = useAppKit();
  return (
    <div>
      <Button
        onClick={async () => {
          await open();
        }}
      >
        {" "}
        wallet Connect
      </Button>
    </div>
  );
};
