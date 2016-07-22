import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizationService, SafeResourceUrl} from "@angular/platform-browser";

@Pipe({
  name: 'youtubeSafeUrl'
})
export class YoutubeSafeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizationService){

  }

  transform(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`);
  }

}
