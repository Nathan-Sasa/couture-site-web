import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/layout/header/header.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { AboutComponent } from '../../shared/components/about/about.component';
import { RealisationComponent } from '../../shared/components/realisation/realisation.component';
import { FooterComponent } from '../../shared/layout/footer/footer.component';

@Component({
	selector: 'app-landing',
	imports: [
		CommonModule,
		RouterModule,

		HeaderComponent,
		HeroComponent,
		AboutComponent,
		RealisationComponent,

		FooterComponent
	],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.css',
})
export class LandingComponent {

}
