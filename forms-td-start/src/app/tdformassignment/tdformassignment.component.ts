import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdformassignment',
  templateUrl: './tdformassignment.component.html',
  styleUrls: ['./tdformassignment.component.css']
})
export class TdformassignmentComponent implements OnInit {
  email: String='';
  password: String="";
  subscriptions='Advanced'
  constructor() { }

  ngOnInit(): void {
  }
  sub(form: NgForm){
    console.log(form.form.get('email').value);
    console.log(form.form.get('subscriptions').value);

    console.log(form.form.get('pswd').value);


  }
}
