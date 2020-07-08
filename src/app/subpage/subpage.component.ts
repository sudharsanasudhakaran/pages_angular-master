import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router} from '@angular/router'
import { ProductService} from '../product.service';

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.component.html',
  styleUrls: ['./subpage.component.css']
})
export class SubpageComponent implements OnInit {
//   singleData;
//   pid;
//   constructor(private activatedRoute : ActivatedRoute, private productService : ProductService) {
//     this.activatedRoute.params.subscribe((postId) =>{
//         this.pid = postId.id;
//       });
//
//   this.productService.postService(this.pid).subscribe(
//     (data) => {
//       this.singleData = data;
//       console.log(this.singleData);
//     },
//     (err) => {
//       //alert("Data Error");
//     },
//     () => {
//       //alert("Complete");
//     }
//   );
// }
constructor(){}

  ngOnInit(): void {
  }

}
