import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    referenceCode: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment