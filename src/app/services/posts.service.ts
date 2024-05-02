import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly http = inject(HttpClient);

  /** Get all posts */
  public getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${API_URL}/posts`);
  }
}
