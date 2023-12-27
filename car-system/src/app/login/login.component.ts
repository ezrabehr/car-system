import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [NavbarComponent]
})
export class LoginComponent {

}
