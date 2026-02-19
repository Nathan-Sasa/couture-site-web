import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FooterComponent } from '../../shared/layout/footer/footer.component';
import { TextWriterDirective } from '../../shared/directives/textwriter.directive';

@Component({
	selector: 'app-contact',
	imports: [
		CommonModule,
		RouterModule,
		FooterComponent,
		TextWriterDirective
	],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.css',
})
export class ContactComponent {

	writer = [
		'Contactez-nous au... +243 823-555-444 & 891-555-444',
		'Et suivez-nous sur nos différents réseaux sociaux',
		'Facebook',
		'Instagram',
		'Tiktok',
		'Pinterest',
		'',
		'Commandez avant le 14 février pour recevoir 20% de reduction sur la couture de tenue de couple.'
	]
}
