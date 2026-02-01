import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'landing',
        title: 'landing',
        loadComponent: ()=> import('./features/landing/landing.component').then(m=> m.LandingComponent)
    },
    {
        path: 'album',
        title: 'album',
        loadComponent: ()=> import('./features/album/album.component').then(m => m.AlbumComponent)
    },
    {
        path: 'contact',
        title: 'contact',
        loadComponent: ()=> import('./features/contact/contact.component').then(m=> m.ContactComponent)
    },
    

    {
        path: 'album/:id',
        title: 'album',
        loadComponent: ()=> import('./shared/layout/display-album/display-album.component').then(m=> m.DisplayAlbumComponent),
        // canActivate: []
    },
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        path: '**',
        title: '404',
        loadComponent: ()=> import('./shared/layout/not-found/not-found.component').then(m=> m.NotFoundComponent)
    }
];
