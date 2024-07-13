import {Routes} from '@angular/router';
import {AboutsUsComponent} from './pages/abouts-us/abouts-us.component';
import {CollectionComponent} from './pages/collections/collection/collection.component';
import {CollectionsComponent} from './pages/collections/collections.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {CategoryComponent} from './pages/jewellery/category/category.component';
import {JewelComponent} from './pages/jewellery/jewel/jewel.component';
import {JewelleryComponent} from './pages/jewellery/jewellery.component';
import {LandingComponent} from './pages/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
  },
  {
    path: 'about-us',
    component: AboutsUsComponent,
    pathMatch: 'full',
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    pathMatch: 'full',
  },
  {
    path: 'collections',
    component: CollectionsComponent,
    pathMatch: 'full',
  },
  {
    path: 'collections/:collection',
    component: CollectionComponent,
    pathMatch: 'full',
  },
  {
    path: 'jewellery',
    component: JewelleryComponent,
    pathMatch: 'full',
  },
  {
    path: 'jewellery/:category',
    component: CategoryComponent,
    pathMatch: 'full',
  },
  {
    path: 'collections/:collection/:jewel',
    component: JewelComponent,
    pathMatch: 'full',
  },
  {
    path: 'jewellery/:category/:jewel',
    component: JewelComponent,
    pathMatch: 'full',
  },
];
