import { Response } from 'src/app/types/response';

export class User {
  id: string;
  role: number;
  language: string;

  constructor(data: Response.User) {
    this.id = data.id;
    this.role = data.role;
    this.language = data.language;
  }
}
