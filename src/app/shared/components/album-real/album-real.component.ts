import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RealService } from '../../../core/services/real.service';
import { IAlbum } from '../../../core/interfaces/interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-real',
	imports: [
		RouterModule,
		CommonModule,
		FormsModule
	],
	templateUrl: './album-real.component.html',
	styleUrl: './album-real.component.css',
})
export class AlbumRealComponent implements OnInit {

	album: IAlbum[] = []
	albumFiltered: IAlbum[] = []
	albumSearch = ''
	albumFilterDefault = 'tout'

	@ViewChild('scrollTop') scrollTop!: ElementRef

	constructor(
		private albumRealService: RealService
	) {}

	ngOnInit(): void {
		this.getAlbum()
	}

	getAlbum(){
		this.albumRealService.getAlbum().subscribe(res => {
			this.album = res
			this.albumFiltered = res
			console.log(res)
		})
	}

	getFilteredAlbum(){
		return this.album
			.filter(A => {
				const nameProd = (A.prod + ' ' + A.search).toLocaleLowerCase()
				const matchesAlbumSearch = nameProd.includes(this.albumSearch.toLocaleLowerCase())
				const filterAlbum = this.albumFilterDefault === 'tout' || A.filter === this.albumFilterDefault
				return matchesAlbumSearch && filterAlbum
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
