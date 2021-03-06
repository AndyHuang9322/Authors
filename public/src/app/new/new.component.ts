import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor: any;
  errors: any =[];
  constructor(private _httpService: HttpService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newAuthor = {name: ""}
  }
  
  createAuthor(){
    console.log(this.newAuthor)
    this._httpService.createAuthor(this.newAuthor).subscribe(response=> {
      if (response['message']=='Error'){
        console.log(response)
        this.errors = response['error']
      } else {
        this.goHome();
      }
    })
  }
  goHome(){
    this._router.navigate(['']);
  }
}
