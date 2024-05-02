import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { inject, Injectable } from '@angular/core';
import { PostsService } from '../services';
import { GetPostsAction, PostTitleAction } from './posts.action';
import { Observable, tap } from 'rxjs';
import { IPost } from '../types';

const POSTS_STATE_TOKEN = new StateToken<PostsStateModel>('posts');

export interface PostsStateModel {
  loading: boolean;
  title: string;
  posts: IPost[];
}

export const INITIAL_STATE: PostsStateModel = {
  loading: false,
  title: '',
  posts: [] as IPost[],
};

@State<PostsStateModel>({
  name: POSTS_STATE_TOKEN,
  defaults: INITIAL_STATE,
})
@Injectable()
export class PostsState {
  private readonly postsService = inject(PostsService);

  @Selector([POSTS_STATE_TOKEN])
  static title(state: PostsStateModel): string {
    return state.title;
  }

  @Selector([POSTS_STATE_TOKEN])
  static posts(state: PostsStateModel): IPost[] {
    return state.posts;
  }

  @Action(PostTitleAction)
  postTitle(ctx: StateContext<PostsStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      title: 'home page',
    });
  }

  @Action(GetPostsAction)
  getPostsAction(
    ctx: StateContext<PostsStateModel>,
    action: GetPostsAction
  ): Observable<IPost[]> {
    return this.postsService.getAllPosts().pipe(
      tap((posts: IPost[]) => {
        console.log('this.postsService.getAllPosts >>>', posts);
        const state = ctx.getState();
        ctx.setState({
          ...state,
          posts: [...state.posts],
        });
      })
    );
  }
}
