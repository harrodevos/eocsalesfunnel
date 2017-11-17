import { Component, ViewEncapsulation } from '@angular/core';
import { SiteModule } from './site/site.module';

@Component({
  selector: 'eoc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
}
