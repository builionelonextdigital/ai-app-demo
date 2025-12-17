export enum Tab {
  HOME = 'HOME',
  GRID = 'GRID',
  LIKES = 'LIKES',
  PROFILE = 'PROFILE'
}

export interface NavItem {
  id: Tab;
  icon: string;
  label?: string;
}