import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DirectiveModule } from './directives/directives.module';
import { PagesModule } from './pages/pages.module';
import { PipesModule } from './pipes/pipes.module';

// services
import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';

// utils
import { Interceptor } from './utils/interceptor';
import { AuthGuard } from './utils/auth-guard';

// APP initialize
// DO NOT USE apiService here!
// export function appFactory (userService: UserService) {
//   // load master data...
// }

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD'
  },
  display: {
    dateInput: 'YYYY/M/D',
    monthYearLabel: 'YYYY/MMM',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY/MMMM'
  }
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    DirectiveModule,
    PagesModule,
    PipesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    AuthGuard,
    ApiService,
    UserService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: appFactory,
    //   deps: [UserService],
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
