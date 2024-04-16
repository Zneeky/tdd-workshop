import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconModule, IgxInputGroupModule } from 'igniteui-angular';
import { IgxInputGroupBase } from 'igniteui-angular/lib/input-group/input-group.common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
public number : number | undefined = undefined;
}
