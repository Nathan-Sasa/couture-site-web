import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-about',
	imports: [
		CommonModule,
		RouterModule
	],
	templateUrl: './about.component.html',
	styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit, OnDestroy {


	currentIndex = 0;
    intervalId: any;

	slides = [
		{
			image: 'assets/img/slider/IMG_9765.JPG',
			title: 'Couture pour homme',
			desc: 'Ensemle pour homme',
			ColorClass: 'bg-[#6b8e23]',
			text: 'text-clr-text-white'
		},
		{
			image: 'assets/img/slider/IMG_9737.JPG',
			title: 'Couture sur-mesure',
			desc: 'Veste homme faite sur-mesure ',
			ColorClass: 'bg-[#4254c9]',
			text: 'text-clr-text-white'
		},
		{
			image: 'assets/img/slider/IMG_9738.JPG',
			title: 'Couture sur-mesure',
			desc: 'Veste homme faite sur-mesure ',
			ColorClass: 'bg-[#4254c9]',
			text: 'text-clr-text-white'
		},
		{
			image: 'assets/img/slider/IMG_9767.JPG',
			title: 'Couture pour femme',
			desc: 'Un ensemble moderne pour les grands évenements',
			ColorClass: 'bg-[#d2691e]'
		},
		{
			image: 'assets/img/slider/IMG_9764.JPG',
			title: 'Couture pour couple',
			desc: 'Joli ensemble assotir pour couple',
			ColorClass: 'bg-[#deb887]',
			text: 'text-clr-text'
		},
		{
			image: 'assets/img/slider/IMG_9763.JPG',
			title: 'Couture pour couple',
			desc: 'Joli ensemble assotir pour couple',
			ColorClass: 'bg-[#141414]',
			text: 'text-clr-text-white'
		},
		{
			image: 'assets/img/slider/IMG_9755.JPG',
			title: 'Couture pour couple',
			desc: 'Joli ensemble assotir pour couple',
			ColorClass: 'bg-[#67071b]',
			text: 'text-clr-text-white'
		},
		{
			image: 'assets/img/slider/IMG_9774.JPG',
			title: 'Couture pour enfant',
			desc: 'Puisque l\'élégance n\'a pas d\'âge',
			ColorClass: 'bg-[#006400]',
			text: 'text-clr-text-white'
		},
		{
			image: 'assets/img/slider/IMG_9773.JPG',
			title: 'Couture pour enfant',
			desc: 'Puisque l\'élégance n\'a pas d\'âge',
			ColorClass: 'bg-[#5f9ea0]',
			text: 'text-clr-text'
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
    }
    startAutoSlide(): void {
        this.intervalId = setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        }, 5000);
    }

}
