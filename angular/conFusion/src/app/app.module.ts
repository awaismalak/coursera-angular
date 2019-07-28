import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from'@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatCardModule, MatButtonModule } from '@angular/material';
import {DishService} from './service/dish.service';

import { MatGridListModule } from '@angular/material/grid-list';




import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { from } from 'rxjs';
import { DishDetaileComponent } from './dish-detaile/dish-detaile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishDetaileComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
 
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
