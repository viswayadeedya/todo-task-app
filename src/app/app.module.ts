import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

//------Components -----
import { AppComponent } from './app.component';
import { NewItemComponent } from './business/new-item/new-item.component';
import { HomeComponent } from './home/home.component';
// *** Related to Business Tasks ***
import { AddComponent } from './business/add/add.component';
import { RectBusiComponent } from './business/rect-busi/rect-busi.component';
import { BusiElseifComponent } from './business/busi-elseif/busi-elseif.component';
//***  Related to personal Tasks ***
import { PersonalListComponent } from './personal/personal-list/personal-list.component';
import { RectPersComponent } from './personal/rect-pers/rect-pers.component';
import { PersElseifComponent } from './personal/pers-elseif/pers-elseif.component';
import { NewItemPersonalComponent } from './personal/new-item-personal/new-item-personal.component';
import { CircleBusiComponent } from './business/circle-busi/circle-busi.component';
import { CirclePersComponent } from './personal/circle-pers/circle-pers.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addnewitembusiness', component: NewItemComponent },
  { path: 'addnewitempersonal', component: NewItemPersonalComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    PersonalListComponent,
    RectBusiComponent,
    RectPersComponent,
    BusiElseifComponent,
    PersElseifComponent,
    NewItemComponent,
    NewItemPersonalComponent,
    CircleBusiComponent,
    CirclePersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
