import { Component } from '@angular/core';
import { ParallaxDirective } from '../../directives/parallax.directive';
import { ScrollStoryDirective } from '../../directives/scroll-story.directive';
import { ScrollSyncDirective } from '../../directives/scroll-sync.directive';
import { ScrollAnimDirective } from '../../directives/scroll-anim.directive';

@Component({
	selector: 'app-test',
	imports: [
		ParallaxDirective,
		ScrollStoryDirective,
		ScrollSyncDirective,
		ScrollAnimDirective
	],
	templateUrl: './test.component.html',
	styleUrl: './test.component.css',
})
export class TestComponent {

}
