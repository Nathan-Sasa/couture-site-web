import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuToggleComponent } from '../menu-toogle/menu-toggle.component';

@Component({
    selector: 'app-header',
    imports: [
		CommonModule,
		RouterModule,
		MenuToggleComponent
	],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {
	
	isMenuOpen = false;

	constructor(
		private render: Renderer2
	) {}

	toggleMenu(){
        this.isMenuOpen = !this.isMenuOpen;
        // this.updateBodyScroll();
    }
    closeMenu(){
        this.isMenuOpen = false;
        // this.updateBodyScroll();
    }
}
