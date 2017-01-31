import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>

  
<px-data-table table-data='[{"first":"Valentine","last":"Meyer","email":"valentinemeyer@scentric.com"},{"first":"Silva","last":"Alexander","email":"silvaalexander@gmail.com"},{"first":"Hopkins","last":"Wong","email":"hopkinswong@hotmail.com"}]'></px-data-table>
`,
})
export class AppComponent  { name = 'Angular';

  //data = [{"first":"Valentine","last":"Meyer","email":"valentinemeyer@scentric.com"},{"first":"Silva","last":"Alexander","email":"silvaalexander@gmail.com"},{"first":"Hopkins","last":"Wong","email":"hopkinswong@hotmail.com"}];
}
