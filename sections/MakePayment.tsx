"use client";

export default function MakePayment() {
  return (
    <div className="flex-1">
      <h3 className="text-xl font-medium mb-4">Make Payment</h3>

      <div className="space-y-6">
        <div className="bg-green-50 border border-green-200 p-4 rounded-md">
          <p className="text-gray-700">
            Please proceed with the payment to complete your admission process. Ensure you use the correct payment method.
          </p>
        </div>

        <div className="border border-gray-300 p-4 rounded-md bg-white shadow-sm">
          <p className="text-gray-700">
            Admission Fee: <strong>₹50,000</strong>
          </p>

          <div className="mt-4">
            <h4 className="font-semibold mb-2">Select Payment Method</h4>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option value="">-- Select Payment Method --</option>
              <option value="credit-card">Credit Card</option>
              <option value="debit-card">Debit Card</option>
              <option value="upi">UPI</option>
              <option value="net-banking">Net Banking</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="px-4 py-2 bg-[#FC8939] text-white rounded-md hover:bg-[#e57830]">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}
