import { Component, OnInit } from '@angular/core';
import { CourseonlineService } from 'src/app/services/courseonline.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listetrangercourse',
  templateUrl: './listetrangercourse.component.html',
  styleUrls: ['./listetrangercourse.component.css']
})
export class ListetrangercourseComponent implements OnInit {
  courseonlines: any;

  mycourseonlines:any=[];
  connectedUser:any

  constructor(private courseonlineService: CourseonlineService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.connectedUser=JSON.parse(localStorage.getItem("connectedUser"));
    
    this.courseonlineService.getcours().subscribe(
      (data) => {
        console.log(data.courseonlines);
        this.courseonlines = data.courseonlines;

        for (let i = 0; i < this.courseonlines.length; i++) {
        
            if(this.courseonlines[i]._id==this.connectedUser.idcourseonline){
              this.mycourseonlines.push(this.courseonlines[i])
            }
          
           
         
        }



      });
  }

}
