import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CanvasComponent } from "./components/canvas/canvas.component";
import { CommonModule } from "@angular/common";
import { InputsComponent } from "./components/inputs/inputs.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InputsComponent,
    CanvasComponent,
  ],
  imports: [CommonModule, BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
