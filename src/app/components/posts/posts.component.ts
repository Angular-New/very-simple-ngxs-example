import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
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
export class PostsComponent implements AfterViewInit {
  private readonly store = inject(Store);

  @Select(PostsState.posts)
  public readonly posts$!: Observable<IPost[]>;

  public ngAfterViewInit(): void {
    this.store.dispatch(new GetPostsAction()).subscribe();
  }
}
