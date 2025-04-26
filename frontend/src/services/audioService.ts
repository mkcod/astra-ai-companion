/**
 * Audio processing service for recording and handling audio data
 */
export class AudioService {
  private stream: MediaStream | null = null;
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private isRecording = false;
  
  // Check if browser supports audio recording
  public isSupported(): boolean {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }
  
  // Request microphone access and setup recording
  public async setupMicrophone(): Promise<boolean> {
    if (!this.isSupported()) {
      console.error('Audio recording is not supported in this browser');
      return false;
    }
    
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      return true;
    } catch (error) {
      console.error('Error accessing microphone:', error);
      return false;
    }
  }
  
  // Start recording audio
  public startRecording(onDataAvailable?: (blob: Blob) => void): void {
    if (!this.stream) {
      console.error('Microphone access not granted');
      return;
    }
    
    this.audioChunks = [];
    this.isRecording = true;
    
    this.mediaRecorder = new MediaRecorder(this.stream);
    
    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        this.audioChunks.push(event.data);
        if (onDataAvailable) {
          onDataAvailable(event.data);
        }
      }
    };
    
    this.mediaRecorder.start(100); // Collect data every 100ms for streaming
  }
  
  // Stop recording and get the recorded audio
  public stopRecording(): Promise<Blob> {
    return new Promise((resolve) => {
      if (!this.mediaRecorder || !this.isRecording) {
        resolve(new Blob());
        return;
      }
      
      this.mediaRecorder.onstop = () => {
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
        this.isRecording = false;
        resolve(audioBlob);
      };
      
      this.mediaRecorder.stop();
    });
  }
  
  // Clean up resources
  public cleanup(): void {
    if (this.mediaRecorder) {
      if (this.isRecording) {
        this.mediaRecorder.stop();
      }
      this.mediaRecorder = null;
    }
    
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }
  }
}

export default new AudioService();