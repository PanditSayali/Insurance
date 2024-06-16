import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSllFtu5pUzmXRczNJUqBrsDzBzMra1YXJT_sNE4nbyYc0zlmu8';
}
