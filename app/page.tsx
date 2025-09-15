// import { cookieStorage, createStorage, http } from '@wagmi/core'
import { ConnectButton } from "@/components/ConnectButton";
import { InfoList } from "@/components/InfoList";
import { ActionButtonList } from "@/components/ActionButtonList";
import Image from 'next/image';

export default function Home() {

  return (
    <div className="h-screen flex flex-col justify-center items-center w-full">
      <ConnectButton />
      <InfoList />
    </div>
  );
}