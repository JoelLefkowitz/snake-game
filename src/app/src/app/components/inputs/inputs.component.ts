import { Component } from '@angular/core';
import { InputsService } from './inputs.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent {
constructor(private inputsService: InputsService) {
}
ngOnInit() {
	console.log(this.inputsService.lines)

	
}
}
