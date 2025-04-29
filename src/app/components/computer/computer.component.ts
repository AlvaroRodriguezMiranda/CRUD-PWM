import {Component, inject, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Computer} from '../../models/computer';
import {ComputersService} from '../../services/computers.service';

@Component({
  selector: 'app-computer',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './computer.component.html',
  styleUrl: './computer.component.css'
})
export class ComputerComponent {

  @Input() computer: Computer | null  = null;
  computerService: ComputersService = inject(ComputersService);

  isEditing = false;
  editComputer: Partial<Computer> = {};

  onClickDelete() {
    if(this.computer) {
      const response = this.computerService.deleteComputer(this.computer.id);
      console.log(response);
    }
  }

  startEditing() {
    if(this.editComputer) {
      this.isEditing = true;
      this.editComputer = {...this.editComputer};
    }
  }

  cancelEditing() {
    this.isEditing = false;
    this.editComputer = {};
  }

  async saveChanges() {
    if(this.computer && this.computer.id) {
      await this.computerService.updateComputer(this.computer.id, this.editComputer);
      this.isEditing = false;
    }
  }
}
