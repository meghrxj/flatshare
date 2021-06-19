const db = require("../Database/models/user.js");
const mongoose = require("mongoose");
module.exports = {
  add: async (data) => {
    let ct = await db.find();
    ct = ct.length + 2523 + 1;
    let name = data.name;
    let number = data.number;
    let city = data.selected;
    let email = data.email;

    let user = await db.findOne({
      name: name,
      number: number,
      city: city,
      email: email,
    });

    if (user) {
      return { stat: "User already exists!" };
    }
    if (!user) {
      try {
        const newuser = new db({
          _id: mongoose.Types.ObjectId(),
          name: name,
          number: number,
          city: city,
          count: ct.toString(),
          email: email,
        });

        await newuser.save().then((r) => console.log(r));
        return { stat: "New user added", ct: ct };
      } catch (error) {
        return { stat: "Something went wrong" };
      }
    }
  },
};
