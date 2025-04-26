export interface Message {
  id: string;
  type: 'user' | 'assistant';
  text: string;
}

export interface WebSocketMessage {
  type: string;
  text: string;
  [key: string]: any;
}