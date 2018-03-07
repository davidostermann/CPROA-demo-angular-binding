import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ColorService } from './color.service';

@NgModule({
  declarations: [AppComponent, ContentComponent],
  imports: [BrowserModule, FormsModule],
  providers: [ColorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
