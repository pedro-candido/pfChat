import { createContext, useContext, useState } from "react";

const [name, setName] = useState("");
const [photo, setPhoto] = useState("");

const defaultValues = {
  name,
  photo,
  setName,
  setPhoto,
};

const ChatContext = createContext({});

const ChatProvider = ({ children }: ChatProviderProps) => (
  <ChatContext.Provider value={defaultValues}>{children}</ChatContext.Provider>
);

const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within ChatProvider");
  }
  return context;
};

export { ChatProvider, useChatContext };
