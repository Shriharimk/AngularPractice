import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('localreference') form:NgForm;
  defaultQuestion='pet';
  answer='';
  genders: String[]=['male','female'];
  user={
    username: '',
    email: '',
    secretQuestio: '',
    answer: '',
    gender: ''
  }
  submitted=false;

  suggestUserName() {
    //const suggestedName = 'Superuser';
    // this.form.setValue({
    //   username:'SuperUser',
    //   email:'',
    //   secret:'pet',
    //   answer:'',
    //   gender: 'male'
    // });

    this.form.form.patchValue({
      username:'TestUser'
    });
  }

  // onSubmit(form:NgForm){
  //  console.log(form); 
  // }
  onSubmit(){
    this.submitted=true;
    this.user.username=this.form.value.username;
    this.user.email=this.form.value.email;
    this.user.secretQuestio=this.form.value.secretQuestio;
    this.user.answer=this.form.value.answer;
    this.user.gender=this.form.value.gender;
    this.form.reset();
   }
}
