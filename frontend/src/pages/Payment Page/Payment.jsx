
import { useState, useEffect } from 'react'
import axios from 'axios'
import { load } from '@cashfreepayments/cashfree-js'

function Payment() {

  const [orderId, setOrderId] = useState("");
  const [cashfree, setCashfree] = useState(null);
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);

  // let cashfree;

  // let initializeSDK = async () => {
  //   cashfree = await load({
  //     mode : "sandbox"
  //   })
  // }

  // initializeSDK();
   // Initialize Cashfree SDK
   useEffect(() => {
    const initializeSDK = async () => {
      try {
        const cashfreeInstance = await load({
          mode: "sandbox", // Change to "production" for live mode
        });
        setCashfree(cashfreeInstance);
      } catch (error) {
        console.error("Failed to load Cashfree SDK:", error);
      }
    };
    initializeSDK();
  }, []);

  useEffect(() => {
    console.log("Updated Order ID in state:", orderId);
  }, [orderId]);

  useEffect(() => {
    if (orderId && isCheckoutComplete) {
      verifyPayment(orderId); // Trigger verification only after checkout is complete and orderId is updated
      setIsCheckoutComplete(false); // Reset the flag
    }
  }, [orderId, isCheckoutComplete]);

  const getSessionId = async () => {
    try {

      let res = await axios.get("http://localhost:3000/gateway/payment")

      if (res.data && res.data.payment_session_id) {
        console.log(res.data);
        setOrderId(res.data.order_id);      
        return res.data.payment_session_id;
      }
      
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  const verifyPayment = async (orderId) => {
    try {
      console.log(orderId);
      let res = await axios.post("http://localhost:3000/gateway/verify", {
        orderId: orderId
      },
      {
        headers : {
          "Content-Type" : "application/json",
        }
      })

      if(res && res.data){
        console.log(res);
        alert(res.data[0].payment_status);
      }

    } catch (error) {
      console.log("Error", error);
    }
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
  
      let sessionId = await getSessionId();
      console.log(sessionId);
      let checkoutOptions = {
        paymentSessionId : sessionId,
        redirectTarget : "_modal",
      }

      cashfree.checkout(checkoutOptions).then((res) => {
        console.log(res.paymentDetails);
        console.log("payment initialized");
        setIsCheckoutComplete(true);
        
        // verifyPayment();
      }).catch(error => {
        console.error(error.res.data.message);
      })
      
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  return (
    <>
      <button onClick={handleClick}>
        Pay Now
      </button>
    </>
  )
}

export default Payment