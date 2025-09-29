import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { IMIME } from '../../models/mime';
import { environment } from '../../../../environments/environment.development';
@Component({
  selector: 'app-player',
  imports: [],
  templateUrl: './player.html',
  styleUrl: './player.scss',
})
export class Player {
  @Input() audioUrl: IMIME | undefined;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  @Input() url: string = environment.audioUrl;
  public isPlaying = false;
  public currentTime = 0;
  public duration = 0;
  public isLoading = true;

  public audioSrc() {
    return this.audioUrl?.audioFile?.filename
      ? `${this.url}/${this.audioUrl.audioFile.filename}`
      : '';
  }

  public togglePlay() {
    if (this.isPlaying) {
      this.audioPlayer.nativeElement.pause();
    } else {
      this.audioPlayer.nativeElement.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  public onLoadedMetadata() {
    this.duration = this.audioPlayer.nativeElement.duration;
    this.isLoading = false;
  }

  public onTimeUpdate() {
    this.currentTime = this.audioPlayer.nativeElement.currentTime;
  }

  public onEnded() {
    this.isPlaying = false;
    this.currentTime = 0;
  }

  public onError() {
    this.isLoading = false;
  }

  public onSeek(event: Event) {
    const target = event.target as HTMLInputElement;
    this.audioPlayer.nativeElement.currentTime = parseFloat(target.value);
  }

  public formatTime(seconds: number): string {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}
