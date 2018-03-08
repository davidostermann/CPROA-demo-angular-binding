import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ColorService } from './color.service';
import { RoutesModule } from './routes/routes.module';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [AppComponent, ContentComponent, HomeComponent, SkillsComponent, ContactComponent, Page404Component],
  imports: [BrowserModule, FormsModule, RoutesModule],
  providers: [ColorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
