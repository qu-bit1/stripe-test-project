# **Godspeed + Stripe Integration** 🚀  
Seamlessly integrate **Stripe's secure payment processing** into your **Godspeed** project.

## **📌 Features**
✔ **Create Payment Intents** using Stripe API  
✔ **Listen to Payment Events** (Success & Failure)  
✔ **Godspeed-First Approach** for event-driven payment handling  
✔ **Easy Setup & Configuration**  

---

## **📖 Installation & Setup**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/qu-bit1/stripe-test-project.git
cd stripe-test-project
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Configure Stripe API Key**
Get your **Stripe Secret Test API Key** from the [Stripe Dashboard](https://dashboard.stripe.com/apikeys).  
Then, add it to `src/datasources/stripe.yaml`:
```yaml
type: stripe
apiKey: 
```
Alternatively, use an `.env` file:
```env
STRIPE_API_KEY=sk_test_1234567890abcdef
```

---

## **🚀 Running the Project**
Start the Godspeed server:
```sh
godspeed serve
```
---

## **🔧 API Endpoints**
The following **API endpoints** are available:

### **1️⃣ Create Payment Intent**
✅ **Endpoint:** `POST /stripe/create-payment`  
✅ **Request Body:**
```json
{
  "amount": 2000,
  "currency": "usd"
}
```
✅ **Response:**
```json
{
  "success": true,
  "code": 200,
  "message": "Payment intent created successfully",
  "data": {
    "paymentIntentId": "pi_xxx",
    "clientSecret": "secret_xxx"
  }
}
```

### **2️⃣ Payment Success Webhook**
✅ **Endpoint:** `POST /stripe/payment-success`  
✅ **Triggers:** `payment_intent.succeeded` event from Stripe  

### **3️⃣ Payment Failure Webhook**
✅ **Endpoint:** `POST /stripe/payment-failure`  
✅ **Triggers:** `payment_intent.payment_failed` event from Stripe  

---

## **🛠 Testing the Integration**
### **1️⃣ Create a Payment**
```sh
curl -X POST http://localhost:3000/stripe/create-payment \
     -H "Content-Type: application/json" \
     -d '{"amount": 2000, "currency": "usd"}'
```

### **2️⃣ Simulate Payment Success**
```sh
stripe trigger payment_intent.succeeded
```

### **3️⃣ Simulate Payment Failure**
```sh
stripe trigger payment_intent.payment_failed
```

---

## **🔗 Related Repositories**
- **Stripe Plugin:** [gs-plugins/stripe-as-datasource](https://github.com/qu-bit1/gs-plugins/tree/stripe-as-datasource-qu-bit1/plugins/stripe-as-datasource)

---

## **🙌 Thank You for Using Godspeed!**  
Need help? Open an issue or reach out! 🚀💳  

---
