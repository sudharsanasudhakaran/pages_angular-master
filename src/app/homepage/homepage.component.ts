import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  items : any;

  constructor(private productService: ProductService) {
    this.productService.getAllData().subscribe(
      data=>{
        this.items= data
        console.log(this.items)
      },
      err => console.log("error",err),
      () => console.log("finally")
    )
  }


  ngOnInit(): void {
  }

}
