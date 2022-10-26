export interface IFigure {
  id: string;
  width: number;
  height: number;
  color: string;
  figure: string;
  xPos: number;
  yPos: number;
}

export interface ICanvas {
  name: string;
  width: number;
  height: number;
  figures: IFigure[];
}

export interface IUser {
  id: string;
  email: string;
  hashedPassword: string;
  userName: string;
  canvasData: ICanvas[];
  phoneNo?: string;
}
