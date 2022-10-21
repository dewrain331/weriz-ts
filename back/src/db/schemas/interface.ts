export interface IUser {
  id: string;
  email: string;
  hashedPassword: string;
  userName: string;
  canvasData: string[];
  phoneNo?: string;
}
