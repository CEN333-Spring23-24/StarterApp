import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

export const routes: Routes = [
    {path:'', component:MainComponent},
    {path:'main',component:MainComponent},
    {path:'second',component:SecondComponent},
    {path:'third',component:ThirdComponent}
];
