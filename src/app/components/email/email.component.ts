import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailbanckendService } from 'src/app/service/emailbanckend.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

data={
  to:"",
  subject:"",
  message:""
}

flag=false;

  constructor(private email:EmailbanckendService , private snak:MatSnackBar) { }

  ngOnInit(): void {
  }

  doSubmitForm(){
    console.log("Try to Submit Form");
    console.log("Data",this.data);
    
    if(this.data.to=='' || this.data.subject=='' || this.data.message=='')
    {
      this.snak.open("field cant be empty !!","Ok");
     return;
    }
    this.flag=true;
    this.email.sendEmail(this.data).subscribe(
      response=>{
         console.log(response);
         this.flag=false;
         this.snak.open("Send Success !!","Ok");
      },
      error=>{
        console.log(error);
        this.flag=false;
        this.snak.open("Error !!","Ok");
      }
      
    )
  }

}
