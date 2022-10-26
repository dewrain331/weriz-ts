import { v4 as uuidv4 } from "uuid";

import userModel from "@src/db/models/userModel";
import { ICanvas } from "@src/db/models/interface";

interface addCanvasProp {
  id: string;
  canvasData: ICanvas;
}

class UserService {
  static getCanvas = async (id: string) => {
    const theUser = await userModel.findById(id);
    if (!theUser) {
      throw new Error("error.noUser");
    }

    const { canvasData } = theUser;

    return canvasData;
  };

  // static addCanvas = async ({ id, canvasData }: addCanvasProp) => {};
}

export default UserService;
