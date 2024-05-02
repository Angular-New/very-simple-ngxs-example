import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetPostsAction } from '../../store/posts.action';
import { IPost } from '../../types';
import { Observable } from 'rxjs';
import { PostsState } from '../../store/posts.state';

@Component({
  selector: 'xs-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit {
  private readonly store = inject(Store);

  @Select(PostsState.posts) posts$!: Observable<IPost[]>;

  public ngOnInit(): void {
    this.store.dispatch(new GetPostsAction()).subscribe();
  }
}
