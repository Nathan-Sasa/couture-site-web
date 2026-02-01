import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TextWriterDirective } from '../../directives/textwriter.directive';
@Component({
    selector: 'app-hero',
    imports: [
		TextWriterDirective
	],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, AfterViewInit {
	
	typeText = [
		'Haute Couture',
		'Design',
		'Styliste',
		'Modeliste'
	]

    ngOnInit(): void {

	}
	
	ngAfterViewInit(): void {
	}

	

}
