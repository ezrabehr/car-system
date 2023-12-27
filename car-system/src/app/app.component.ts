import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RegisterComponent, MainPageComponent,NgbModule,]
})
export class AppComponent {
  title = 'car-system';

 
}
