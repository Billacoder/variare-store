export default function CustomOrderEmail({
  customer,
  order,
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
            New Custom Order Request
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
                <td>{customer.email}</td>
              </tr>

              <tr>
                <td><strong>Phone</strong></td>
                <td>{customer.phone}</td>
              </tr>
            </tbody>
          </table>

          {/* Order Details */}
          <h2
            style={{
              borderBottom: "1px solid #eee",
              paddingBottom: "10px",
              marginBottom: "20px",
            }}
          >
            Custom Order
          </h2>

          <table
            style={{
              width: "100%",
              marginBottom: "35px",
            }}
          >
            <tbody>
              <tr>
                <td><strong>Order ID</strong></td>
                <td>{order.id}</td>
              </tr>

              <tr>
                <td><strong>Product</strong></td>
                <td>{order.product}</td>
              </tr>

              <tr>
                <td><strong>Timeline</strong></td>
                <td>{order.timeline}</td>
              </tr>

              <tr>
                <td><strong>Status</strong></td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>

          {/* Measurements */}
          <h2
            style={{
              borderBottom: "1px solid #eee",
              paddingBottom: "10px",
              marginBottom: "20px",
            }}
          >
            Measurements
          </h2>

          <div
            style={{
              background: "#fafafa",
              padding: "18px",
              borderRadius: "10px",
              marginBottom: "35px",
            }}
          >
            {Object.keys(order.measurements || {}).length === 0 ? (
              <p>No measurements provided.</p>
            ) : (
              <table style={{ width: "100%" }}>
                <tbody>
                  {Object.entries(order.measurements).map(
                    ([key, value]) => (
                      <tr key={key}>
                        <td
                          style={{
                            padding: "6px 0",
                            textTransform: "capitalize",
                          }}
                        >
                          <strong>{key}</strong>
                        </td>

                        <td>{value} cm</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            )}
          </div>

          {/* Notes */}
          <h2
            style={{
              borderBottom: "1px solid #eee",
              paddingBottom: "10px",
              marginBottom: "20px",
            }}
          >
            Additional Notes
          </h2>

          <div
            style={{
              background: "#fafafa",
              padding: "18px",
              borderRadius: "10px",
              whiteSpace: "pre-wrap",
              marginBottom: "35px",
            }}
          >
            {order.notes || "No additional notes provided."}
          </div>

          {/* Images */}
          <h2
            style={{
              borderBottom: "1px solid #eee",
              paddingBottom: "10px",
              marginBottom: "20px",
            }}
          >
            Inspiration Images
          </h2>

          {order.imageUrls && order.imageUrls.length > 0 ? (
            <ul>
              {order.imageUrls.map((url, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  <a href={url}>{url}</a>
                </li>
              ))}
            </ul>
          ) : (
            <p>No inspiration images uploaded.</p>
          )}
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
          This custom order request was submitted through the Variare website.
        </div>
      </div>
    </div>
  );
}