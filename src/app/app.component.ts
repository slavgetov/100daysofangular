import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParagraphComponent } from './paragraph/paragraph.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParagraphComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-commands';
}
