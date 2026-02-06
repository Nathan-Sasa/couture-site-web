import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IAlbum } from '../../../core/interfaces/interfaces';
import { RealService } from '../../../core/services/real.service';

@Component({
	selector: 'app-display-album.component',
	imports: [
		CommonModule,
		RouterModule
	],
	templateUrl: './display-album.component.html',
	styleUrl: './display-album.component.css',
})
export class DisplayAlbumComponent implements OnInit {

	albumRealById: IAlbum = <IAlbum>{}

	constructor (
		private route: ActivatedRoute,
		private albumService: RealService
	) {}

	ngOnInit(): void {
		this.getRealById()
	}

	getRealById(){
		const paramId = Number(this.route.snapshot.paramMap.get('id'))
		const id = paramId ? +paramId : 0

		// this.albumService.getAlbum().subscribe((album: IAlbum[]) => {
		// 	this.albumRealById = album.find(A => A.id === id) || <IAlbum>{} as IAlbum
		// })

		this.albumService.getAlbum().subscribe({
			next: (res: IAlbum[]) => {
				this.albumRealById = res.find(A => A.id === id ) || <IAlbum>{} as IAlbum
			}
		})

	}

}
