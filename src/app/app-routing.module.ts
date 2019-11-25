import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { PageseComponent } from './pagese/pagese.component';
import { ListsComponent } from './lists/lists.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ListPruductsComponent } from './home/list-pruducts/list-pruducts.component';
import { navSearchComponent } from './categories/list-pruduct/nav-search.component';
import { ListPruductStateComponent } from './categories/list-pruduct/list-pruduct-state/list-pruduct-state.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  { path: 'categories', component: CategoriesComponent},
  {path: 'categories', component: CategoriesComponent,
    children: [
      { path: 'list', component: ListPruductStateComponent },
      { path: 'grid', component: navSearchComponent },
    ]
  },
  {path: 'lists', component: ListsComponent },
  {path: 'pages', component: PageseComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  CategoriesComponent,
  ListsComponent,
  PageseComponent,
  BlogComponent,
  ContactUsComponent,
  ListPruductsComponent,
  navSearchComponent,
  ListPruductStateComponent
]
