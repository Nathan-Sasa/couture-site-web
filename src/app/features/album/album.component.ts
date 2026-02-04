import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/layout/footer/footer.component';
import { ParallaxDirective } from '../../shared/directives/parallax.directive';
import { TestComponent } from '../../shared/components/test/test.component'
import { AlbumRealComponent } from '../../shared/components/album-real/album-real.component'

// TestComponent

@Component({
    selector: 'app-album.component',
    imports: [
        CommonModule,
        FooterComponent,
        ParallaxDirective,
		AlbumRealComponent
		
    ],
    templateUrl: './album.component.html',
    styleUrl: './album.component.css',
})
export class AlbumComponent implements OnInit, OnDestroy {


    currentIndex = 0;
    intervalId: any;

    slides = [
        {
            image: 'assets/img/album/hero/IMG_9815-removebg-preview.png',
			title: 'Couture pour homme',
			desc: 'Ensemle pour homme',
            call: 'Nouvel Arrivage',
			ColorClass: 'bg-[#6b8e23]',
			text: 'text-clr-text-white'
        },
        {
			image: 'assets/img/album/hero/IMG_9809-removebg-preview.png',
			title: 'Couture sur-mesure',
            call: 'Nouvel Arrivage',
			desc: 'Veste homme faite sur-mesure ',
			ColorClass: 'bg-[#4254c9]',
			text: 'text-clr-text-white'
		},
		{
			image: 'assets/img/album/hero/IMG_9811-removebg-preview.png',
			title: 'Couture sur-mesure',
			desc: 'Veste homme faite sur-mesure ',
            call: 'Nouvel Arrivage',
			ColorClass: 'bg-[#4254c9]',
			text: 'text-clr-text-white'
		},
		{
			image: 'assets/img/album/hero/IMG_9810-removebg-preview.png',
			title: 'Couture pour femme',
			desc: 'Un ensemble moderne pour les grands évenements',
            call: 'Nouvel Arrivage',
			ColorClass: 'bg-[#d2691e]',
			text: 'text-clr-text'
		},
		{
			image: 'assets/img/album/hero/IMG_9748-removebg-preview.png',
			title: 'Couture pour couple',
			desc: 'Joli ensemble assotir pour couple',
            call: 'Nouvel Arrivage',
			ColorClass: 'bg-[#deb887]',
			text: 'text-clr-text'
		},
		{
			image: 'assets/img/album/hero/IMG_9735-removebg-preview.png',
			title: 'Couture pour couple',
			desc: 'Joli ensemble assotir pour couple',
            call: 'Nouvel Arrivage',
			ColorClass: 'bg-[#141414]',
			text: 'text-clr-text-white'
		},
		{
			image: 'assets/img/album/hero/IMG_9752-removebg-preview.png',
			title: 'Couture pour couple',
			desc: 'Joli ensemble assotir pour couple',
            call: 'Nouvel Arrivage',
			ColorClass: 'bg-[#67071b]',
			text: 'text-clr-text-white'
		},
		{
			image: 'assets/img/album/hero/IMG_9751-removebg-preview.png',
			title: 'Couture pour enfant',
			desc: 'Puisque l\'élégance n\'a pas d\'âge',
            call: 'Nouvel Arrivage',
			ColorClass: 'bg-[#006400]',
			text: 'text-clr-text-white'
		},
    ]

    ngOnInit(): void {
        this.startAutoSlide()
    }

	ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }

    goToSlide(index: number): void{
        this.currentIndex = index
		clearInterval(this.intervalId)

		setTimeout(() => {
			this.intervalId = setInterval(() => {
				this.currentIndex = (this.currentIndex + 1) % this.slides.length;
			}, 5000);
		},5000)
    }

    startAutoSlide(): void {
        this.intervalId = setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        }, 5000);
    }
}
