import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-menu-toggle',
	imports: [
		CommonModule,
		RouterModule
	],
	templateUrl: './menu-toggle.component.html',
	styleUrl: './menu-toggle.component.css',
})
export class MenuToggleComponent {

	@Input() isOpen = false
	@Output() closed = new EventEmitter<void>()

	close(){
		this.closed.emit()
	}
	
}
