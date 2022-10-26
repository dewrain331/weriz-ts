import { User } from "@src/db/schemas/user";
import { IFigure } from "@src/db/models/interface";

interface updateFiguresProp {
  id: string;
  figureData: IFigure[];
}

const userModel = {
  findById: async (id: string) => {
    const theUser = await User.findOne({ id });

    return theUser;
  },

  updateFigures: async ({ id, figureData }: updateFiguresProp) => {
    const filter = { id };
    const update = { $set: figureData };
    const option = { returnOriginal: false };

    const updatedUser = await User.findOneAndUpdate(filter, update, option);

    return updatedUser;
  },
};

export default userModel;
