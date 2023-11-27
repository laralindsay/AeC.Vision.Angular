import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  version = environment.version;
}
