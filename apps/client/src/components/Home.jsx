import React from "react";

export const Home = () => {
  const coupons = [
    {
      id: 1,
      storeName: "IKEA",
      imageSrc:
        "https://logos-world.net/wp-content/uploads/2020/09/IKEA-Logo-1982-2019.png",
      description:
        "IKEA offers a wide range of stylish and affordable furniture and home decor.",
      discount: 10,
      expiryDate: "06/01/2024",
    },
    {
      id: 2,
      storeName: "Home Center",
      imageSrc:
        "https://www.icoupons.co.il/wp-content/uploads/2020/10/4124124.png",
      description:
        "Home Center provides a variety of home furnishings, accessories, and decor.",
      discount: 15,
      expiryDate: "06/15/2024",
    },
    {
      id: 3,
      storeName: "ACE",
      imageSrc:
        "https://serviced.co.il/wp-content/uploads/2021/06/%D7%90%D7%99%D7%99%D7%A1-%D7%9C%D7%95%D7%92%D7%95.jpg",
      description:
        "ACE offers a range of home improvement products and services.",
      discount: 20,
      expiryDate: "06/10/2024",
    },
    {
      id: 4,
      storeName: "Electrical Warehouses",
      imageSrc:
        "https://th.bing.com/th/id/R.427fd25615c0e1632161afdac85b4644?rik=3NlJuVHs9VtWng&pid=ImgRaw&r=0",
      description:
        "Electrical Warehouses provides a variety of electronic , kitchenware, and home essentials.",
      discount: 25,
      expiryDate: "06/20/2024",
    },
    {
      id: 5,
      storeName: "Bethili",
      imageSrc: "https://media.easy.co.il/images/PICS/5585091.jpg",
      description:
        "Bethili offers a vast selection of furniture and home goods at affordable prices.",
      discount: 30,
      expiryDate: "06/25/2024",
    },
    {
      id: 6,
      storeName: "Castro Home",
      imageSrc:
        "https://th.bing.com/th/id/OIP.XFh9-zM4yQE71vYIwT06dgHaDC?rs=1&pid=ImgDetMain",
      description:
        "Castro Home provides unique and stylish furniture, decor, and accessories for your home.",
      discount: 15,
      expiryDate: "06/15/2024",
    },
    {
      id: 7,
      storeName: "Zara Home",
      imageSrc:
        "https://peruretail.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/zarahome.webp",
      description:
        "Zara Home offers a wide selection of home improvement products and services.",
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

export default Home;
