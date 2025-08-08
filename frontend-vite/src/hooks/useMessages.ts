import { useEffect, useState } from "react";

export const useMessages = () => {
  const [messages, setMessages] = useState<
    { message: string; createdAt: number; ttl?: number }[]
  >([
    { message: "Happy Friday Charlie!", createdAt: Date.now(), ttl: 14400000 },
  ]);

  const addMessage = (newMessage: {
    message: string;
    createdAt: number;
    ttl?: number;
  }): void => {
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    setInterval(() => {
      removeExpired();
    }, 10000);

    function removeExpired() {
      const now = Date.now();

      setMessages(
        messages.filter((msg) =>
          msg.ttl ? now - msg.createdAt < msg.ttl : true
        )
      );
    }
  }, [messages]);

  return {
    messages,
    addMessage,
  };
};
