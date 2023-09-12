import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ErrorComponent } from './components/error/error.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  { path: "homepage", component: HomepageComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "about", component: AboutComponent },
  { path: "not-found", component: ErrorComponent },
  { path: "**", component: ErrorComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
