import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IReal } from '../../../core/interfaces/interfaces';
import { RealService } from '../../../core/services/real.service';
import { FormsModule} from '@angular/forms'

@Component({
	selector: 'app-realisation',
	imports: [
		CommonModule,
		RouterModule,
		FormsModule
		
	],
	templateUrl: './realisation.component.html',
	styleUrl: './realisation.component.css',
})
export class RealisationComponent implements OnInit {

	real: IReal[] = []
	filteredReal: IReal[] = []
	filterDefault: string = 'tout'

	@ViewChild('scrollTop') scrollTop!: ElementRef

	constructor(
		private realService: RealService
	) {}

	ngOnInit(): void{
		this.getReal()
	}

	
	getReal(){
		this.realService.getReal().subscribe(res =>{
			this.real = res
			this.filteredReal = res
		})
	}

	getFilteredReal(){
		return this.real
			.filter(r => {
				const filterReal = this.filterDefault === 'tout' || r.filter === this.filterDefault
				return filterReal
			})
	}

	scroll(){
		if(this.scrollTop){
			this.scrollTop.nativeElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		}
	}
}
