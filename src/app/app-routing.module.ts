// Core
import { NgModule } from '@angular/core' 
import { RouterModule, Routes } from '@angular/router'

// Components
import { UsecasesComponent } from './about/usecases/usecases.component'
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
    { path: 'home', component:DashboardComponent },
    { path: 'about', component: UsecasesComponent },
    { path: '', redirectTo: 'home', pathMatch:'full' },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}