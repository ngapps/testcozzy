import { Component } from '@angular/core';

@Component({
  selector: 'cz-footer',
  template: `
    <footer class="footer">
      <div class="container">
        <span class="text-muted">&copy; \n{{app.year}}\n - {{ app.name }}</span>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent   {
  app = {year:2016, name:"ngapps.eu"};
}
