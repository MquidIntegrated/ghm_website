import {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import api from "../utils/ApiBaseUrl";

const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  // const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [paymentDetails, setPaymentDetails] = useState<any>(null);
  // const [paymentSuccess, setPaymentSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    const transactionId = searchParams.get("reference");
    // const transactionStatus = searchParams.get("status");
    // console.log("transaction id to be passed", transactionId);
    if (transactionId) {
      // console.log("transaction id to be passed", transactionId);
      const timer = setTimeout(() => {
        getTransactionData(transactionId);
      }, 5000); // Wait for 5 seconds before attempting to fetch
      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [searchParams]);

  const getTransactionData = async (transactionId: string) => {
    try {
      const response = await api.get(
        `/transaction/get-transaction-data?transaction_id=${transactionId}`
      );
      // console.log(response.data);
      setPaymentDetails(response.data.data);
    } catch (error) {
      console.error(error);
      // setPaymentStatus("Payment verification failed. Please contact support.");
    }
  };

  return (
    <div className="ghm-container py-10 md:py-20">
      <div className="text-center">
        <p className="text-ghmPurple-300 mb-4">Payment Status</p>
        <h2 className="text-ghmBlack font-semibold text-3xl md:text-4xl mb-4">
          {paymentDetails?.status.toUpperCase()}
        </h2>
      </div>

      <div className="bg-white shadow-md max-w-4xl mx-auto p-6 rounded-lg flex flex-col gap-y-6">
        {/* <div>
          <h1 className="text-lg font-medium text-ghmGrey-700 mb-2">
            Payment Status
          </h1>
          <p>{paymentStatus}</p>
        </div> */}

        {paymentDetails && (
          <div>
            <h2 className="text-lg font-medium text-ghmGrey-700 mb-2">
              Your Details
            </h2>
            <p>
              <span className="font-semibold mr-2">Full Name:</span>
              {paymentDetails.full_name}
            </p>
            <p>
              <span className="font-semibold mr-2">Email:</span>{" "}
              {paymentDetails.email}
            </p>
            <p>
              <span className="font-semibold mr-2">Phone Number:</span>
              {`+234${paymentDetails.phone_number}`}
            </p>
            <p>
              <span className="font-semibold mr-2">Address:</span>
              {paymentDetails.address}
            </p>
            {/* <p>
              <span className="font-semibold mr-2">Family Size:</span>
              {paymentDetails.familySize}
            </p> */}
            <p>
              <span className="font-semibold mr-2">Amount:</span> ₦
              {paymentDetails.amountPaid.toLocaleString()}
            </p>
          </div>
        )}
      </div>

      {/* action buttons */}
      <div className="my-6 flex w-full justify-end space-x-4 max-w-4xl mx-auto">
        <Link
          to="/"
          className="bg-ghmPurple-100 text-ghmPurple-300 px-5 md:px-8 py-2 rounded-full text-sm md:text-base"
        >
          Back to Homepage
        </Link>
        <Link
          to="/plans"
          className="bg-ghmPurple-300 text-ghmPurple-100 px-5 md:px-8 py-2 rounded-full text-sm md:text-base"
        >
          View Our Plans
        </Link>
      </div>
    </div>
  );
};

export default PaymentStatus;
