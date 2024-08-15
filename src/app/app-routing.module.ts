import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListFondComponent } from "./component/fond/list-fond/list-fond.component";
import { AddFondComponent } from "./component/fond/add-fond/add-fond.component";
import { ListModaliteComponent } from "./component/modalite/list-modalite/list-modalite.component";
import { AddModaliteComponent } from "./component/modalite/add-modalite/add-modalite.component";
import { ListPartenaireComponent } from "./component/partenaire/list-partenaire/list-partenaire.component";
import { AddPartenaireComponent } from "./component/partenaire/add-partenaire/add-partenaire.component";
import { AddConventionComponent } from "./component/convention/add-convention/add-convention.component";
import { ViewPartenaireComponent } from "./component/partenaire/view-partenaire/view-partenaire.component";
import { AuthComponent } from "./component/auth/auth.component";
import { LoginComponent } from "./component/login/login.component";

const routes: Routes = [


    { path: 'listfonds', component: ListFondComponent },
    { path: 'addfonds', component: AddFondComponent },
    { path: 'addfonds/:id', component: AddFondComponent },


    { path: 'listmodalite', component: ListModaliteComponent },
    { path: 'addmodalite', component: AddModaliteComponent },
    { path: 'addmodalite/:id', component: AddModaliteComponent },

    { path: 'listpartenaire', component: ListPartenaireComponent },
    { path: 'addpartenaire', component: AddPartenaireComponent },
    { path: 'addpartenaire/:id', component: AddPartenaireComponent },

    { path: 'viewpartenaire/:id', component: ViewPartenaireComponent },


    { path: 'addconvention', component: AddConventionComponent },


    { path: 'register', component: AuthComponent },   
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'auth', component: LoginComponent },








  
];




@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }