import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {

        title:"Goku" ,
        url:"http://pm1.narvii.com/7828/849557d07a9390fc03b546f24fca611a7ac51640r1-736-670v2_uhq.jpg",
        description:"Goku"

    },
    {
        title:"Vegita",
        url:"https://criticalhits.com.br/wp-content/uploads/2022/03/majin-vegeta-1200x675-1.jpg",
        description:"Vegita"

    }
]
}
