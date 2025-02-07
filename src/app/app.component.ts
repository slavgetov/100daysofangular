import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { CommandListComponent } from './command-list/command-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParagraphComponent, CommandListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-commands';
}
