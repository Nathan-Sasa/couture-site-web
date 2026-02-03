import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/layout/footer/footer.component';

@Component({
    selector: 'app-album.component',
    imports: [
        CommonModule,
        FooterComponent
    ],
    templateUrl: './album.component.html',
    styleUrl: './album.component.css',
})
export class AlbumComponent {

}
