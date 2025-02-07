import { Component } from '@angular/core';
import { signal, WritableSignal } from '@angular/core';
@Component({
  selector: 'app-command-list',
  standalone: true,
  imports: [],
  templateUrl: './command-list.component.html',
  styleUrl: './command-list.component.css',
})
export class CommandListComponent {
  commands = signal([
    { id: 0, value: 'ng new <some project name>' },
    { id: 1, value: 'ng generate c <some component name>' },
  ]);
}
