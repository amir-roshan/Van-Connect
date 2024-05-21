/* eslint-disable @typescript-eslint/no-explicit-any */
// src/types/react-chat-engine.d.ts
declare module "react-chat-engine" {
  import { ComponentType, ReactNode } from "react";

  interface Credentials {
    userName: string;
    userSecret: string;
    projectID: string;
  }

  type ChatID = number;

  interface ChatEngineProps {
    projectID: string;
    userName: string;
    userSecret: string;
    height?: string;
    renderNewMessageForm?: (creds: Credentials, chatId: ChatID) => JSX.Element;
    onConnect?: () => void;
    onDisconnect?: () => void;
    onFailAuth?: () => void;
    onError?: (error: any) => void;
  }

  interface ChatEngineWrapperProps {
    children: ReactNode;
  }

  interface SocketProps {
    projectID: string;
    userName: string;
    userSecret: string;
    onConnect?: () => void;
    onDisconnect?: () => void;
    onMessage?: (message: any) => void;
    onError?: (error: any) => void;
  }

  export const ChatEngine: ComponentType<ChatEngineProps>;
  export const ChatEngineWrapper: ComponentType<ChatEngineWrapperProps>;
  export const Socket: ComponentType<SocketProps>;
}
