import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { AppRoutingModule } from './app.routing.module';
import { ValueService } from './value/value.service';

@NgModule({
  declarations: [AppComponent, ValueComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [ValueService],
  bootstrap: [AppComponent]
})
export class AppModule {}
