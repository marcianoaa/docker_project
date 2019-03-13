import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatSort, MatTableDataSource, MatDialog, MatSnackBar, TooltipPosition} from '@angular/material';

import { Dog } from './dog.model';
import { DogsService } from '../app/dogs.service';
import { DogDialogComponent } from './dogdialog/dogdialog.component';

export interface Dog {
  dogid: string;
  name: string;
  breed: string;
  gender: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dogs';
  data: Dog[] = [];
  private dogSub: Subscription;

  dogs = new MatTableDataSource(this.data);


  displayedColumns: string[] = ['id', 'dogid', 'name', 'breed', 'gender'];

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[4]);

  constructor(public DogsService: DogsService, private dialog: MatDialog, private alert: MatSnackBar) { }

  @ViewChild(MatSort) sort: MatSort;

  newDog() {
    const dialogRef = this.dialog.open(DogDialogComponent, {
      data : {
        title: 'New Dog',
        buttons: [
          {text: 'Add Dog', icon: 'add', function: 'addDog()', color: 'indianred'}
        ]
      },
      height: '320px',
      width: '740px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if ( result ) {
        this.addDog(result);
      }
    });
  }

  addDog(dialogData) {
    this.DogsService.addDog(dialogData.dogid, dialogData.name, dialogData.breed, dialogData.gender);
    this.alert.open('Dog Added Successfully', '', {duration: 1500, panelClass: ['snack-alert']});
  }

  editDog(dog) {
    const dialogRef = this.dialog.open(DogDialogComponent, {
      data : {
        title: 'Edit Dog',
        buttons: [
          {text: 'Delete Dog', icon: 'delete' , function: 'deleteDog()', color: 'gray'},
          {text: 'Save Dog', icon: 'done', function: 'addDog()', color: 'indianred'}
        ],
        id: dog.id,
        dogid: dog.dogid,
        name: dog.name,
        breed: dog.breed,
        gender: dog.gender
      },
      height: '320px',
      width: '740px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.function === 'delete') {
        console.log(result);
        this.DogsService.deleteDog(result.id);
        this.alert.open('Dog Deleted', '', {duration: 1500, panelClass: ['snack-alert']});
      } else {
            this.DogsService.updateDog(
              result.id,
              result.dogid,
              result.name,
              result.breed,
              result.gender,
              this.alert.open('Dog Updated', '', {duration: 1500, panelClass: ['snack-alert']}));
      }
      });
  }

  copyThis(text) {

    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    this.alert.open(  + text + ' copied to clipboard', '', {duration: 1500, panelClass: ['snack-alert']});
  }


  ngOnInit() {
    this.dogs.sort = this.sort;
    this.DogsService.getDogs();
    this.dogSub = this.DogsService.getPostUpdateListener()
      .subscribe((dogs: Dog[]) => {
        this.dogs = new MatTableDataSource(dogs);
      });
  }
}
