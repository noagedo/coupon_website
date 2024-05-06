import React from "react";

export const Food = () => {
  const coupons = [
    {
      id: 1,
      storeName: "domino's pizza",
      imageSrc:
        "https://th.bing.com/th/id/R.05993c024b3b2769a62fb4ed55912aee?rik=xDNUWq1GMP4lNg&pid=ImgRaw&r=0",
      description:
        "domino's pizza is a popular restaurant known for its delicious pizzas and Italian cuisine.",
      discount: 10,
      expiryDate: "06/01/2024",
    },
    {
      id: 2,
      storeName: "Burger King",
      imageSrc:
        "https://th.bing.com/th/id/R.6656c3663037d4a748b3345ce63966f1?rik=ObrGyk7OwfFBDg&pid=ImgRaw&r=0",
      description:
        "Burger King offers a wide range of tasty burgers, fries, and shakes for all burger lovers.",
      discount: 15,
      expiryDate: "06/15/2024",
    },
    {
      id: 3,
      storeName: "Japnika",
      imageSrc: "https://d25t2285lxl5rf.cloudfront.net/images/shops/24670.jepg",
      description:
        "Japnika specializes in fresh and delicious sushi rolls and Japanese dishes.",
      discount: 20,
      expiryDate: "06/10/2024",
    },
    {
      id: 4,
      storeName: "The Mexicani",
      imageSrc:
        "https://rve.co.il/wp-content/uploads/2018/07/logo-mexicani.png",
      description:
        "The Mexicani offers authentic Mexican tacos and dishes packed with flavor.",
      discount: 25,
      expiryDate: "06/20/2024",
    },
    {
      id: 5,
      storeName: "Cafe Cafe",
      imageSrc:
        "https://www.namal.co.il/wp-content/uploads/2019/11/cafe-cafe.jpg",
      description:
        "Cafe Cafe serves a variety of freshly brewed coffees, teas, and pastries.",
      discount: 30,
      expiryDate: "06/25/2024",
    },
    {
      id: 6,
      storeName: "MAX BRENNER",
      imageSrc:
        "https://th.bing.com/th/id/R.25c6d42f808cdeb5b16edfc36003c483?rik=LBUCySRw%2bFNVSQ&pid=ImgRaw&r=0",
      description:
        "MAX BRENNER offers a sweet selection of cakes, cookies, and desserts for all occasions.",
      discount: 15,
      expiryDate: "06/15/2024",
    },
    {
      id: 7,
      storeName: "Tamara",
      imageSrc: "https://d25t2285lxl5rf.cloudfront.net/images/shops/25523.jpg",
      description:
        "Tamara serves fresh and healthy juices, smoothies, and fruit bowls.",
      discount: 20,
      expiryDate: "06/10/2024",
    },
  ];

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
          <h2>{coupon.storeName}</h2>
          <div
            style={{
              width: "100%",
              paddingBottom: "75%",
              position: "relative",
            }}
          >
            <img
              src={coupon.imageSrc}
              alt={coupon.storeName}
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
            <strong>Expiry Date:</strong> {coupon.expiryDate}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Food;
