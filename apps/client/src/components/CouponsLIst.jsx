

export const CouponsList = ({ coupons }) => {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {coupons.map((coupon) => (
          <div
            key={coupon.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <h2>{coupon.name}</h2>
            <div
              style={{
                width: "100%",
                paddingBottom: "75%",
                position: "relative",
              }}
            >
              <img
                src={coupon.imageSrc}
                alt={coupon.name}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "270px",
                  height: "200px",
                }}
              />
            </div>
            <p>
              <strong>Description:</strong> {coupon.description}
            </p>
            <p>
              <strong>Discount Percentage:</strong> {coupon.discount}%
            </p>
            <p>
              <strong>Expiry Date:</strong> {coupon.expired}
            </p>
          </div>
        ))}
      </div>
    );
  };


  export default CouponsList;