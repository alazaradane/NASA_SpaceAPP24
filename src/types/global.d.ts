// Use type safe message keys with `next-intl`
type Messages = typeof import('../locales/en.json');
declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      url?: string;
    };
  }
}

// eslint-disable-next-line
declare interface IntlMessages extends Messages {}
