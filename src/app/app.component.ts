import { Component } from "@angular/core";
import { ProductService } from "./product.service";
import { Observable } from "rxjs";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router"


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "httpModuleDemo";




}
