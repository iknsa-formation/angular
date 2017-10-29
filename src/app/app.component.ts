import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<ul>
<li *ngFor="let name of names">Hello {{ name }}</li>
</ul>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 names: string[]; // Array<string>
constructor() {
this.names = ['Bob', 'Marley', 'Tuppac', 'Amaru', 'Shakur'];
}

}
