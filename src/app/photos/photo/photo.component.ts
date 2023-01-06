import { Component, Input } from '@angular/core';

const cloud: string = 'http://localhost:3000/imgs/'

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html'
})

export class PhotoComponent {

  private _url = ''

   @Input() description = ''

   @Input() set url(url: any) {
    if(!url.startsWith('data'))
      this._url = cloud + url
    else
      this._url = url
    
   }

   get url(){
    return this._url
   }
}
