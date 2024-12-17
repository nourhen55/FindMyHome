// message.model.ts
export interface Message {
  id: string;
  name: string;
  avatar: string;
  subject: string;
  text: string;
  email: string;
  date: string;
  isExpanded?: boolean;  // Added to track whether the message is expanded
}

export interface MessagesData {
  messages: Message[];
}
