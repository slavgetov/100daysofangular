import { Component } from '@angular/core';
import { signal } from '@angular/core';
@Component({
  selector: 'app-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.css',
})
export class ParagraphComponent {
  personalName = signal('Slav');
}
