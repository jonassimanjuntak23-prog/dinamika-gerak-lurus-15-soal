/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * MISTER JO - DYNAMICS LAB: TEXT-TO-SPEECH SERVICE
 * Indonesian TTS engine using Web Speech API with automatic voice fallback,
 * natural pacing, interruption control, and speech state tracking.
 */

class TtsService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private selectedVoice: SpeechSynthesisVoice | null = null;
  private isVoiceLoaded = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    if (!voices || voices.length === 0) return;

    // Prioritize natural Indonesian voice
    const indonesianVoice =
      voices.find(v => v.lang === 'id-ID' || v.lang === 'id_ID' || v.lang.startsWith('id')) ||
      voices.find(v => v.lang.includes('id') || v.name.toLowerCase().includes('indonesia'));

    if (indonesianVoice) {
      this.selectedVoice = indonesianVoice;
    } else {
      // Fallback to default system voice
      this.selectedVoice = voices[0];
    }
    this.isVoiceLoaded = true;
  }

  public isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  public isSpeaking(): boolean {
    if (!this.synth) return false;
    return this.synth.speaking;
  }

  public stop(): void {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (err) {
        console.warn('Error cancelling speech synthesis:', err);
      }
    }
    this.currentUtterance = null;
  }

  public speak(
    text: string,
    options?: {
      onStart?: () => void;
      onEnd?: () => void;
      onError?: (err: unknown) => void;
      rate?: number;
      pitch?: number;
    }
  ): void {
    if (!this.synth) {
      options?.onError?.(new Error('Web Speech API tidak didukung pada browser ini.'));
      return;
    }

    // Always stop ongoing speech first to prevent double-audio
    this.stop();

    if (!this.isVoiceLoaded) {
      this.loadVoices();
    }

    // Clean up text if needed for speech synthesis
    const cleanText = text
      .replace(/\\text\{([^}]+)\}/g, '$1')
      .replace(/\\cdot/g, ' kali ')
      .replace(/\\times/g, ' kali ')
      .replace(/\\implies/g, ' maka ')
      .replace(/\\sum/g, ' jumlah ')
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1 per $2');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'id-ID';
    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }

    // Pedagogical pacing for Mister Jo: natural, clear, warm
    utterance.rate = options?.rate ?? 0.95;
    utterance.pitch = options?.pitch ?? 1.0;

    utterance.onstart = () => {
      options?.onStart?.();
    };

    utterance.onend = () => {
      this.currentUtterance = null;
      options?.onEnd?.();
    };

    utterance.onerror = (e) => {
      this.currentUtterance = null;
      // SpeechSynthesis 'interrupted' or 'canceled' are normal during navigation
      if (e.error !== 'interrupted' && e.error !== 'canceled') {
        options?.onError?.(e);
      } else {
        options?.onEnd?.();
      }
    };

    this.currentUtterance = utterance;

    try {
      this.synth.speak(utterance);
    } catch (err) {
      options?.onError?.(err);
    }
  }
}

export const tts = new TtsService();
