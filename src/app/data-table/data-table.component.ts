import { Component} from '@angular/core';
import { RestAPIService } from '../rest-api.service';
import { Student } from '../shared/student';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent{
  data : any;
  error : any;
  form : any;
  nascondi : boolean = false;
  student : Student;

  constructor( private api : RestAPIService) {
    this.loadData();
    this.student = {
      studentId: 0, 
      name: "", 
      surname: "", 
      sidiCode: "", 
      taxCode: ""
    };
  }

  loadData() : void {
    this.api.getStudent('http://localhost:4200/student.php/').subscribe(
      data => this.data = data,
      error => this.error = error
    )
  }

  deleteStudent(event : any){
    let id = event.target.id
    this.api.deleteStudent('http://localhost:4200/student.php/' + id).subscribe()
    this.loadData()
  }

  showForm(event : any){
    this.student.studentId = event.target.id;
    if(this.nascondi) this.nascondi = false;
    else this.nascondi = true;
  }

  updateStudent(){
    this.api.putStudent('http://localhost:4200/student.php/' + this.student.studentId , this.student).subscribe()
    this.loadData()
    this.nascondi = false;
  }
}