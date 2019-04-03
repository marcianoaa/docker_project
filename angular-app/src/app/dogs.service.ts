import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Dog } from './dog.model';

@Injectable({
  providedIn: 'root'
})

export class DogsService {
  private dogs: Dog[] = [];
  private dogsUpdated = new Subject<Dog[]>();

  constructor(private http: HttpClient) {}

  getDogs() {
    this.http
      .get<{ message: string; dogs: any }>(
        'http://localhost:3000/api/dogs'
      )
      .pipe(map((postData) => {
        return postData.dogs.map(post => {
          console.log(post);
          return {
            dogid: post.dogid,
            name: post.name,
            breed: post.breed,
            gender: post.gender,
            id: post._id
          };
        });
      }))
      .subscribe(transformedDogs => {
        this.dogs = transformedDogs;
        this.dogsUpdated.next([...this.dogs]);
      });
  }

  getPostUpdateListener() {
    return this.dogsUpdated.asObservable();
  }

  addDog(dogid: string, name: string, breed: string, gender: string) {
    const post: Dog = {
      id: '',
      dogid: dogid,
      name: name,
      breed : breed ,
      gender : gender};
    this.http
      .post<{ message: string, postId: string }>('http://localhost:3000/api/dogs', post)
      .subscribe(responseData => {
        const id = responseData.postId;
        post.id = id;
        this.dogs.push(post);
        this.dogsUpdated.next([...this.dogs]);
      });
  }

  updateDog(iD: string, dogid: string, name: string, breed: string, gender: string) {
    const post: Dog = {
      id: iD,
      dogid: dogid,
      name: name,
      breed : breed ,
      gender : gender};
    this.http
      .put<{ message: string, postId: string }>('http://localhost:3000/api/dogs', post)
      .subscribe(responseData => {
        this.getDogs();
      });
  }

  deleteDog(postId: string) {
    console.log(postId);
    this.http.delete('http://localhost:3000/api/dogs/' + postId)
      .subscribe(() => {
        const updatedPosts = this.dogs.filter(post => post.id !== postId);
        this.dogs = updatedPosts;
        this.dogsUpdated.next([...this.dogs]);
      });
  }
}

