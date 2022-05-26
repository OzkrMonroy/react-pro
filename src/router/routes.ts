import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '01-lazyLoad/pages';

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
  name: string;
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "Lazy1" */'01-lazyLoad/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "Lazy2" */'01-lazyLoad/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "Lazy3" */'01-lazyLoad/pages/LazyPage3'));

export const routes: Route[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: Lazy1,
    name: 'LazyPage1',
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    Component: Lazy2,
    name: 'LazyPage2',
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: Lazy3,
    name: 'LazyPage3',
  },
]