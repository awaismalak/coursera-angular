import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from'@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatCardModule, MatButtonModule } from '@angular/material';
import {DishService} from './service/dish.service';
import { PromotionService} from './service/promotion.service';
import { AppRoutingModule} from './app-routing/app-routing.module'
import { LeadersinfoService } from './leadersinfo.service';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';




import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { from } from 'rxjs';
import { DishDetaileComponent } from './dish-detaile/dish-detaile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CorporateLeadershipComponent } from './shared/components/corporate-leadership/corporate-leadership.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishDetaileComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CorporateLeadershipComponent,
    LoginComponent
    
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
    MatButtonModule,
    MatDialogModule
 
  ],
  entryComponents:[
   LoginComponent
  ],
  providers: [DishService,PromotionService,
    
    
   
    
    
    LeadersinfoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
