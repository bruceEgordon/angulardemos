import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home.page.component";
import { BasicFormComponent } from "./basic.form.component";
import { PeopleListComponent } from "./people.list.component";
import { PersonDetailComponent } from "./15.25.person.detail.component";

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'form', component: BasicFormComponent },
    { path: 'people', component: PeopleListComponent },
    { path: 'person/:index', component: PersonDetailComponent}
];

export const routing = [
    RouterModule.forRoot(routes)
];