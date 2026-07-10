// ========================
// Voice Module Stub
// Web Speech API integration
// ========================

export class VoiceManager {
  async transcribe(_audioBuffer: Buffer) {
    // TODO: implement speech-to-text
    throw new Error('Not implemented');
  }

  async synthesize(_text: string) {
    // TODO: implement text-to-speech
    throw new Error('Not implemented');
  }
}

export const voiceManager = new VoiceManager();
