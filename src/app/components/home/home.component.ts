import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PostsState } from '../../store/posts.state';
import { PostTitleAction } from '../../store/posts.action';

@Component({
  selector: 'xs-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly store = inject(Store);

  @Select(PostsState.title)
  public readonly title$!: Observable<string>;

  public handleClick(): void {
    this.store.dispatch(new PostTitleAction()).subscribe();
  }
}
