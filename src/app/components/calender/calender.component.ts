import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import Swal from 'sweetalert2';
import { EventService } from 'src/app/services/event.service';
import timeGridPlugin from '@fullcalendar/timegrid';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import frLocale from '@fullcalendar/core/locales/fr';


@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  connectedUser: any;
  connected = false;
  calendarOptions: CalendarOptions = {


    initialView: 'timeGridWeek',






  }


  posts: any;
  addeventform: FormGroup;
  error: any;
  event: any = {};
  events:any;



  constructor(private eventService: EventService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser") || "[]");
    console.log(this.connectedUser);

    if (this.connectedUser.role === "teacher") {
      this.connected = true;


    } else if (this.connectedUser.role === "student") {
      this.connected = true;
    }

    this.getAllEvents();
    this.addeventform = this.formBuilder.group({
      title: [''],
      date: [''],
      datefin: ['']



    })
  }
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }
 

  deleteEvent(id) {
    this.eventService.deleteSingleEvent(id).subscribe((data: any) => {

    });
  }

  getAllEvents() {
    this.eventService.getAllEvents().subscribe((data: any) => {
      this.posts = data.posts;







      const self = this;
      this.calendarOptions = {
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        selectable: true,
        locale: frLocale,
        slotMinTime: '8:00:00',
        slotMaxTime: '20:00:00',
        editable: true,
        events:data.posts,
        eventClick(evetData) {
          this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
          if (this.connectedUser.role === "superAdmin") {
            const event_id = evetData.event._def.extendedProps._id;
            Swal.fire({
              title: 'Are you sure?',
              text: 'You won\'t be able to revert this!',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!',
              timer: 30000,
            }).then((result) => {
              if (result.value) {
                self.deleteEvent(event_id);
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                );
                self.getAllEvents();
              }

            }).catch(() => {
              Swal.fire('Failed!', 'There was something went wrong.');
            });

          }else{
            Swal.fire({
              title:"seule Ladminstrateur peut modifier",
              icon: 'error',
              confirmButtonText: 'ok',
              showCancelButton: true
            })

          }




        }
      };
    });
  }


  saveEvent() {

    this.eventService.addEvent(this.event).subscribe(
      (data) => {
        console.log(data.message);

        if (data.message === 'success') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Event has been added successfully',
            showConfirmButton: false,
            timer: 1500
          });
          location.reload();
        }
      },
      err => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Something went wrong',
          showConfirmButton: false,
          timer: 1500
        });

      });
  }

}
