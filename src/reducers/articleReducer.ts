import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { IArticleModel } from '../models';

const initialState: RootState.ArticleState = [
  {
    body: "abc",
    id: 0,
    name: "woda",
    image: "./images/placeholders/obraz1.jpg"
  },
  {
    body: "abc",
    id: 1,
    name: "woda",
    image: "./images/placeholders/obraz2.jpg"
  },
  {
    body: "abc",
    id: 2,
    name: "woda",
    image: "./images/placeholders/obraz2.jpg"
  },
  {
    body: "abc",
    id: 3,
    name: "woda",
    image: "./images/placeholders/obraz3.jpg"
  },
  {
    body: "abc",
    id: 4,
    name: "woda",
    image: "./images/placeholders/obraz4.jpg"
  },
  {
    body: "abc",
    id: 5,
    name: "woda",
    image: "./images/placeholders/obraz5.jpg"
  },
  {
    body: "abc",
    id: 6,
    name: "woda",
    image: "./images/placeholders/obraz6.jpg"
  },
  {
    body: "abc",
    id: 7,
    name: "woda",
    image: "./images/placeholders/obraz1.jpg"
  },
  {
    body: "abc",
    id: 8,
    name: "woda",
    image: "./images/placeholders/obraz2.jpg"
  },
  {
    body: "abc",
    id: 9,
    name: "woda",
    image: "./images/placeholders/obraz3.jpg"
  },
  {
    body: "abc",
    id: 10,
    name: "woda",
    image: "./images/placeholders/obraz20.jpg"
  },
  {
    body: "abc",
    id: 11,
    name: "woda",
    image: "./images/placeholders/obraz10.jpg"
  },
  {
    body: "abc",
    id: 12,
    name: "woda",
    image: "./images/placeholders/obraz11.png"
  },
  {
    body: "abc",
    id: 13,
    name: "woda",
    image: "./images/placeholders/obraz12.jpg"
  },
  {
    body: "abc",
    id: 14,
    name: "woda",
    image: "./images/placeholders/obraz13.jpg"
  },
  {
    body: "abc",
    id: 15,
    name: "woda",
    image: "./images/placeholders/obraz14.jpg"
  },
  {
    body: "abc",
    id: 16,
    name: "woda",
    image: "./images/placeholders/obraz15.jpg"
  },
  {
    body: "abc",
    id: 17,
    name: "woda",
    image: "./images/placeholders/obraz16.jpg"
  },
  {
    body: "abc",
    id: 18,
    name: "woda",
    image: "./images/placeholders/obraz17.jpg"
  },
  {
    body: "abc",
    id: 19,
    name: "woda",
    image: "./images/placeholders/obraz18.jpg"
  },
  {
    body: "abc",
    id: 20,
    name: "woda",
    image: "./images/placeholders/obraz19.jpg"
  },
];

export const articleReducer = handleActions<RootState.ArticleState, IArticleModel>(
  {    
  },
  initialState
);
