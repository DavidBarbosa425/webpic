import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.component.html',
  styleUrls: ['./photo.component.component.css']
})
export class PhotoComponentComponent {

   @Input() title = ''
   @Input() description = ''
   @Input() url = ''
}
