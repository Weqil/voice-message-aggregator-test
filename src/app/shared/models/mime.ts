interface IAudioFile {
  disposition: string;
  estimatedSize: number;
  filename: string;
  partID: string;
  subtype: string;
  type: string;
  voice: string;
}
export interface IMIME {
  audioFile: IAudioFile;
  class: string;
  estimatedSize: number;
  subtype: string;
  type: string;
}

