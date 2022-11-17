import { User } from "@src/db/schemas/user";
import { ICanvas } from "@src/db/models/interface";

interface updateCanvasProp {
  id: string;
  canvasData: ICanvas[];
}

const userModel = {
  findById: async (id: string) => {
    const theUser = await User.findOne({ id });

    return theUser;
  },

  updateCanvas: async ({ id, canvasData }: updateCanvasProp) => {
    const filter = { id };
    const update = { $set: canvasData };
    const option = { returnOriginal: false };

    const updatedUser = await User.findOneAndUpdate(filter, update, option);

    return updatedUser;
  },
};

export default userModel;
