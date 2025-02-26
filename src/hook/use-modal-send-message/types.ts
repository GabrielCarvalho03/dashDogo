export type IHandleSendMessage = {
  templateName: string;
  language: string;
};

export interface IModalSendMessage {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;

  handleSendMessage: ({ templateName, language }: IHandleSendMessage) => void;
}
