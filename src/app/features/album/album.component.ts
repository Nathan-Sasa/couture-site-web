import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/layout/footer/footer.component';
import { ParallaxDirective } from '../../shared/directives/parallax.directive';
import { TestComponent } from '../../shared/components/test/test.component'

@Component({
    selector: 'app-album.component',
    imports: [
        CommonModule,
        FooterComponent,
        TestComponent
    ],
    templateUrl: './album.component.html',
    styleUrl: './album.component.css',
})
export class AlbumComponent {

}
