import {Component, inject} from '@angular/core';
import {ComputerComponent} from '../../components/computer/computer.component';
import {NgForOf} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Computer} from '../../models/computer';
import {ComputersService} from '../../services/computers.service';

@Component({
  selector: 'app-home',
  imports: [
    ComputerComponent,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  computers: Computer[] = [];
  computerService: ComputersService = inject(ComputersService);
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      cpu: new FormControl(),
      gpu: new FormControl(),
      ram: new FormControl(),
    })
  }

  ngOnInit() {
    this.computerService.getAllComputers().subscribe(computers => this.computers = computers);
  }

  async onSubmit() {
    const response = await this.computerService.addComputer(this.form.value);
    console.log(response);
    this.form.reset();
  }

}
