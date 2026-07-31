export default function OrderEmail({
  customer,
  address,
  items,
  total,
}) {
  return (
    <div
      style={{
        backgroundColor: "#f6f5f2",
        padding: "40px 20px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: "#2d2d2d",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid #ececec",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "#111111",
            color: "#ffffff",
            padding: "35px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "34px",
              letterSpacing: "4px",
            }}
          >
            VARIARE
          </h1>

          <p
            style={{
              marginTop: "10px",
              color: "#d6d6d6",
              fontSize: "15px",
            }}
          >
            New Order Received
          </p>
        </div>

        <div style={{ padding: "35px" }}>
          {/* Customer */}
          <h2
            style={{
              borderBottom: "1px solid #eee",
              paddingBottom: "10px",
              marginBottom: "20px",
            }}
          >
            Customer Information
          </h2>

          <table
            style={{
              width: "100%",
              marginBottom: "35px",
            }}
          >
            <tbody>
              <tr>
                <td><strong>Name</strong></td>
                <td>{customer.name}</td>
              </tr>

              <tr>
                <td><strong>Email</strong></td>
                <td>{customer.email || "Not provided"}</td>
              </tr>

              <tr>
                <td><strong>Phone</strong></td>
                <td>{customer.phone}</td>
              </tr>
            </tbody>
          </table>

          {/* Address */}
          <h2
            style={{
              borderBottom: "1px solid #eee",
              paddingBottom: "10px",
              marginBottom: "20px",
            }}
          >
            Delivery Address
          </h2>

          <div
            style={{
              background: "#fafafa",
              padding: "18px",
              borderRadius: "10px",
              marginBottom: "35px",
              whiteSpace: "pre-line",
            }}
          >
            {address}
          </div>

          {/* Products */}
          <h2
            style={{
              borderBottom: "1px solid #eee",
              paddingBottom: "10px",
              marginBottom: "20px",
            }}
          >
            Ordered Items
          </h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr style={{ background: "#f5f5f5" }}>
                <th
                  style={{
                    textAlign: "left",
                    padding: "14px",
                  }}
                >
                  Product
                </th>

                <th>Size</th>

                <th>Qty</th>

                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <td
                    style={{
                      padding: "16px 14px",
                    }}
                  >
                    {item.title}
                  </td>

                  <td style={{ textAlign: "center" }}>
                    {item.size || "-"}
                  </td>

                  <td style={{ textAlign: "center" }}>
                    {item.quantity}
                  </td>

                  <td style={{ textAlign: "center" }}>
                    ₹{item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total */}
          <div
            style={{
              marginTop: "35px",
              textAlign: "right",
            }}
          >
            <h2
              style={{
                margin: 0,
              }}
            >
              Total: ₹{total}
            </h2>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            background: "#fafafa",
            padding: "25px",
            textAlign: "center",
            color: "#666",
            fontSize: "14px",
          }}
        >
          This order was placed through the Variare website.
        </div>
      </div>
    </div>
  );
}