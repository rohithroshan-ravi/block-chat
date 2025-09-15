'use client'

import { useEffect } from 'react'
import {
    useAppKitState,
    useAppKitTheme,
    useAppKitEvents,
    useAppKitAccount,
    useWalletInfo
     } from '@reown/appkit/react'
import { useClientMounted } from '@/hooks/useClientMount';
import { Button } from './ui/button';


export const InfoList = () => {
    const kitTheme = useAppKitTheme();
    const state = useAppKitState();
    const {address, caipAddress, isConnected, embeddedWalletInfo} = useAppKitAccount();
    const events = useAppKitEvents()
    const walletInfo = useWalletInfo()
    const mounted = useClientMounted();
    useEffect(() => {
        console.log("Events: ", events);
    }, [events]);

  return !mounted ? null : (
    <>
    {isConnected && (
          <>
            <Button
              className="w-full mt-10 rounded-2xl flex items-center justify-center"
              size="lg"
              onClick={async () => {
                const user = await PushAPI.initialize(signer, {
                  env: CONSTANTS.ENV.PROD,
                });
                if (user) {
                  if (!user.readMode) {
                    dispatch(setUser(user));
                    streamChat(user);
                    router.push("/dashboard");
                  }
                }
              }}
            >
              Initiate Push{" "}
              <ChatBubbleBottomCenterTextIcon className="h-5 w-5 ml-1" />
            </Button>
            <Button
              className="w-full mt-5 rounded-2xl flex items-center justify-center"
              size="lg"
              onClick={() => {
                if (stream) stream.disconnect();
                disconnect();
              }}
            >
              Disconnect{" "}
              <ArrowLeftStartOnRectangleIcon className="h-5 w-5 ml-1 -mt-0.5" />
            </Button>
          </>
        )}
    </>
  )
}