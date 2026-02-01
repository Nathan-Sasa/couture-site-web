import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/layout/header/header.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';

@Component({
	selector: 'app-landing',
	imports: [
		CommonModule,
		RouterModule,

		HeaderComponent,
		HeroComponent
	],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.css',
})
export class LandingComponent {

}
