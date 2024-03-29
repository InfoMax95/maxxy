import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ErrorComponent } from './components/error/error.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AuthGuard } from './guards/auth.guard';
import { AddPostComponent } from './admin/add-post/add-post.component';
import { UpdatePostComponent } from './admin/update-post/update-post.component';

const routes: Routes = [
  { path: "", redirectTo: "homepage", pathMatch: "full" },
  { path: "homepage", component: HomepageComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "about", component: AboutComponent },
  // ADMIN SECTION
  { path: 'admin', component: LoginComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: "dashboard/add-post", component: AddPostComponent },
      { path: "dashboard/update-post/:id", component: UpdatePostComponent }
    ]
  },
  // END ADMIN SECTION
  { path: "not-found", component: ErrorComponent },
  { path: "**", component: ErrorComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
