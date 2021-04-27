import { Component } from '@angular/core';
import { RestAPIService } from '../rest-api.service';
import { Student } from '../shared/student';



@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css']
})
export class InsertFormComponent {

  nascondi : boolean = false;
  data : any;
  error : any;
  student : Student;

  constructor( private api : RestAPIService ) {
    this.student = {
      studentId: 0, 
      name: "", 
      surname: "", 
      sidiCode: "", 
      taxCode: ""
    };
   }

  mostraFormParametri () : void {
    if(this.nascondi) this.nascondi = false;
    else this.nascondi = true;
  }

  addstudent() : void {
    this.api.getStudent("http://localhost:4200/student.php/").subscribe(
        data => {
            this.data = data;

            try {
              this.student.studentId =  this.data[this.data.length-1].studentId + 1;
            }
            catch {
              this.student.studentId = 0;
            }

            this.api.postStudent("http://localhost:4200/student.php/", this.student).subscribe();
            location.reload(); 
        },
        error => console.log(error)
    );
  }
}
