import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComputerComponent} from './components/computer/computer.component';
import {HomeComponent} from './pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'computersproyect';
}
