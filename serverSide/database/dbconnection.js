import mongoose from "mongoose";

const connection = () => {
  mongoose
    .connect(process.env.DBURL)
    .then(() => console.log("Database connected successfully"))
    .catch((err) =>
      console.log("error occured while connecting to database", err)
    );
};

export default connection;
