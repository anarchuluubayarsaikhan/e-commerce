import { model, Schema } from "mongoose"
const userSchema = new Schema({
  name: {
    type: String,
    required: [true,"Нэрээ оруулна уу"]
  },
  email: {
    type:String,
    required:[true, "Имэйлээ оруулна уу"],
    unique: true
  },
  password: {
    type:String,
    required: [true,"Нууц үгээ оруулна уу"]
  }
})
export const Usermodel = model("User", userSchema )