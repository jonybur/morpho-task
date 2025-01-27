declare module '*.svg' {
  import { ReactComponent } from '*.svg';
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export const ReactComponent: typeof content;
  export default content;
} 