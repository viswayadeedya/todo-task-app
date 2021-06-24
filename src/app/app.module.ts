import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//------Components -----
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { SharedListComponent } from './list/sharedlist/sharedlist.component';
import { SharedListItemComponent } from './list/sharedlist/shared-list-item/shared-list-item.component';
import { AuthInterceptorService } from './login/auth-interceptor.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    SharedListComponent,
    SharedListItemComponent,
  ],
  imports: [
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    PasswordModule,
    InputTextModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
