import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { inject, Injectable } from '@angular/core';
import { PostsService } from '../services';
import { PostTitle } from './posts.action';

const POSTS_STATE_TOKEN = new StateToken<PostsStateModel>('posts');

export interface PostsStateModel {
  loading: boolean;
  title: string;
  posts: [];
}

export const INITIAL_STATE: PostsStateModel = {
  loading: false,
  title: '',
  posts: [],
};

@State<PostsStateModel>({
  name: POSTS_STATE_TOKEN,
  defaults: INITIAL_STATE,
})
@Injectable()
export class PostsState {
  private readonly postsService = inject(PostsService);

  @Selector()
  static title(state: PostsStateModel): string {
    return state.title;
  }

  @Action(PostTitle)
  postTitle(ctx: StateContext<PostsStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      title: 'home page',
    });
  }
}
