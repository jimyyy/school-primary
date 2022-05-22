import { Component, OnInit } from '@angular/core';
import { CourService } from 'src/app/services/cour.service';
import { PushNotificationService } from 'src/app/services/push-notification.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-gestioncoursdistance',
  templateUrl: './gestioncoursdistance.component.html',
  styleUrls: ['./gestioncoursdistance.component.css']
})
export class GestioncoursdistanceComponent implements OnInit {
  users: any;
  searchText: any;
  cours: any;
  subjects: any;
  matieres: any;
  notif: any = {};

  constructor(private courService: CourService,
    private userService: UserService,
    private notifications: PushNotificationService) { }

  ngOnInit(): void {
    this.courService.getcours().subscribe(
      (data) => {
        console.log(data.cours);
        this.cours = data.cours;
      });

    this.userService.getusers().subscribe(
      (data) => { //data howa retour taa requete//
        console.log(data.users);
        this.users = data.users;





      });
    this.courService.getmodules().subscribe(
      (data) => {
        console.log(data.subjects);
        this.subjects = data.subjects;

        console.log(this.subjects)

      });

    this.courService.getmatieres().subscribe(
      (data) => {
        console.log(data.matieres);
        this.matieres = data.matieres;
        console.log(this.matieres)
      })
  }

  deletecour(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.courService.deletecour(id).subscribe(
          (data) => {
            console.log(data.message);
            this.courService.getcours().subscribe(
              (data) => {
                console.log(data.cours);
                this.cours = data.cours;


              })

          })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })


  }

  confirmcours(cours) {

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      
      if (result.isConfirmed) {
        cours.status = "confirmé";
        this.courService.updatestatus(cours).subscribe(
          (data) => {
            console.log(data.message);

          }
        )

        this.notif.title = "mise a jour sur le status de cours ";
        this.notif.date = new Date();
        this.notif.status= "non lu";
        this.notif.type = "notif to enseignant"

        this.notif.idEnseignant=cours.idEnseignant
    
        this.notifications.createnotif(this.notif).subscribe(
          (data) => {
            console.log(data.message);
          });

       
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

   






  }

  refuseCour(cours) {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        cours.status = "Réfuser";
        this.courService.updatestatus(cours).subscribe(
          (data) => {
            console.log(data.message);

          }
        )

        this.notif.title = "mise a jour sur le status de cours ";
        this.notif.date = new Date();
        this.notif.status = "non lu";
        this.notif.type = "notif to enseignant"
        this.notif.idEnseignant=cours.idEnseignant



    
        this.notifications.createnotif(this.notif).subscribe(
          (data) => {
            console.log(data.message);
          });
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

   



  }

  open(img){
    window.open(img);
  }





}
