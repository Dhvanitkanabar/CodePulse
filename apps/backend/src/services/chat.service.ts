// ========================
// Chat Service Stub
// ========================

export class ChatService {
  async createConversation(_userId: string, _title: string) {
    // TODO: implement
    throw new Error('Not implemented');
  }

  async addMessage(_conversationId: string, _role: string, _content: string) {
    // TODO: implement
    throw new Error('Not implemented');
  }

  async getConversations(_userId: string) {
    // TODO: implement
    throw new Error('Not implemented');
  }
}

export const chatService = new ChatService();
