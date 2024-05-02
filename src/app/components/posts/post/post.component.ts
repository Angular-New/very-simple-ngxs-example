import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPost } from '../../../types';

@Component({
  selector: 'xs-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  @Input({ required: true })
  post!: IPost;
}
