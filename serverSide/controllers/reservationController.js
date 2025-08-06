import customer from "../models/userModel.js";
import Errorhandler from "../middleware/error.js";

export const sendReservation = async (req, res, next) => {
  const { firstname, lastname, email, phone, time, date } = req.body;

  if (!firstname || !lastname || !email || !phone || !time || !date) {
    return next(new Errorhandler("All fields are required", 400));
  }

  try {
    await customer.create({ firstname, lastname, email, phone, time, date });

    res.status(200).json({
      success: true,
      message: "Reservation sent successfully",
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const validationerrors = Object.values(err.errors).map(
        (error) => error.message
      );

      return next(new Errorhandler(validationerrors.join(","), 400));
    }

    return next(err);
  }
};
