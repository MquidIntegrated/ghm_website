import {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import api from "../utils/ApiBaseUrl";

const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [paymentDetails, setPaymentDetails] = useState<any>(null);
  const [paymentSuccess, setPaymentSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    const transactionId = searchParams.get("transaction_id");
    const paymentStatus = searchParams.get("status");

    // Retrieve payment data
    const storedDetails = localStorage.getItem("paymentDetails");
    if (storedDetails) {
      setPaymentDetails(JSON.parse(storedDetails));
      console.log("payment details", paymentDetails);
    }

    if (
      transactionId &&
      (paymentStatus === "completed" || paymentStatus === "successful")
    ) {
      verifyTransaction(transactionId);
    } else {
      setPaymentStatus("Payment failed or cancelled.");
    }
  }, [searchParams]);

  const verifyTransaction = async (transactionId: string) => {
    try {
      const response = await api.get(
        `/payment/flutter-callback?transaction_id=${transactionId}`
      );
      console.log(response);
      setPaymentStatus("Payment made successfully!");
      setPaymentSuccess(true);
      // alert("Payment successful!");
    } catch (error) {
      console.log(error);
      setPaymentStatus("Payment verification failed. Please contact support.");
      setPaymentSuccess(false);
      // alert("Payment verification failed. Please contact support.");
    }
  };

  return (
    <div className="ghm-container py-10 md:py-20">
      <div className="text-center">
        <p className="text-ghmPurple-300 mb-4">Payment Status</p>
        <h2 className="text-ghmBlack font-semibold text-3xl md:text-4xl mb-4">
          {paymentSuccess
            ? "Thank you for your payment"
            : "Payment failed to complete, please try again"}
        </h2>
      </div>

      <div className="bg-white shadow-md max-w-4xl mx-auto p-6 rounded-lg flex flex-col gap-y-6">
        <div>
          <h1 className="text-lg font-medium text-ghmGrey-700 mb-2">
            Payment Status
          </h1>
          <p>{paymentStatus}</p>
        </div>

        {paymentDetails && (
          <div>
            <h2 className="text-lg font-medium text-ghmGrey-700 mb-2">
              Your Details
            </h2>
            <p>
              <span className="font-semibold mr-2">Full Name:</span>
              {paymentDetails.fullName}
            </p>
            <p>
              <span className="font-semibold mr-2">Email:</span>{" "}
              {paymentDetails.email}
            </p>
            <p>
              <span className="font-semibold mr-2">Phone Number:</span>
              {paymentDetails.phoneNumber}
            </p>
            <p>
              <span className="font-semibold mr-2">Address:</span>
              {paymentDetails.address}
            </p>
            <p>
              <span className="font-semibold mr-2">Family Size:</span>
              {paymentDetails.familySize}
            </p>
            <p>
              <span className="font-semibold mr-2">Amount Paid:</span> ₦
              {paymentDetails.paymentTotal.toLocaleString()}
            </p>
          </div>
        )}
      </div>

      {/* action buttons */}
      <div className="my-6 flex w-full justify-end space-x-4 max-w-4xl mx-auto">
        <Link
          to="/"
          className="bg-ghmPurple-100 text-ghmPurple-300 px-8 py-2 rounded-full"
        >
          Back to Homepage
        </Link>
        <Link
          to="/plans"
          className="bg-ghmPurple-300 text-ghmPurple-100 px-8 py-2 rounded-full"
        >
          View Our Plans
        </Link>
      </div>
    </div>
  );
};

export default PaymentStatus;
