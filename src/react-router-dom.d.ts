declare module 'react-router-dom' {
  import * as React from 'react';

  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string;
    replace?: boolean;
    state?: any;
  }
  
  export const Link: React.FC<LinkProps>;
  
  // Add other components as needed
  export const BrowserRouter: React.ComponentType<any>;
  export const Routes: React.ComponentType<any>;
  export const Route: React.ComponentType<any>;
  export const Navigate: React.ComponentType<any>;
  export const useNavigate: () => (path: string) => void;
  export const useParams: () => Record<string, string>;
  export const useLocation: () => any;
}
