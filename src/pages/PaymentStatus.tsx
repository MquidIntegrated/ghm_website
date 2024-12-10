import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import api from "../utils/ApiBaseUrl";

const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  useEffect(() => {
    const transactionId = searchParams.get("transaction_id");
    const paymentStatus = searchParams.get("status");

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
      setPaymentStatus("Payment verified successfully!");
      alert("Payment successful!");
    } catch (error) {
      console.log(error);
      setPaymentStatus("Payment verification failed. Please contact support.");
      alert("Payment verification failed. Please contact support.");
    }
  };

  return (
    <div>
      <h1>Payment Status</h1>
      <p>{paymentStatus}</p>
    </div>
  );
};

export default PaymentStatus;
