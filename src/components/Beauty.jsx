import React from "react";

export const Beauty = () => {
  const coupons = [
    {
      id: 1,
      storeName: "SUPER FHARM",
      imageSrc:
        "https://www.one1.co.il/wp-content/uploads/2018/08/superparm.jpg",
      description:
        "SUPER FHARM is a leading beauty retailer offering a wide range of makeup, skincare, and fragrance products.",
      discount: 20,
      expiryDate: "06/05/2024",
    },
    {
      id: 2,
      storeName: "Be",
      imageSrc: "https://media.easy.co.il/images/StaticLogo/26558780_1.jpg",
      description:
        "Be is a one-stop shop for all your beauty needs, with a vast selection of cosmetics, haircare, and skincare products.",
      discount: 15,
      expiryDate: "06/10/2024",
    },
    {
      id: 3,
      storeName: "MAC Cosmetics",
      imageSrc:
        "https://i.pinimg.com/736x/20/c7/ca/20c7ca578ceb91b448c76e845e252a57.jpg",
      description:
        "MAC Cosmetics is known for its high-quality makeup products, offering a wide range of shades and finishes for every skin tone.",
      discount: 25,
      expiryDate: "06/15/2024",
    },
    {
      id: 4,
      storeName: "SABON",
      imageSrc: "https://iconape.com/wp-content/files/rj/94681/svg/sabon.svg",
      description:
        "SABON offers handmade cosmetics made from fresh, organic ingredients, including bath bombs, soaps, and skincare products.",
      discount: 30,
      expiryDate: "06/20/2024",
    },
    {
      id: 5,
      storeName: "IL MAKIAGE",
      imageSrc:
        "https://mma.prnewswire.com/media/832576/IL_MAKIAGE_Logo.jpg?p=twitter",
      description:
        "IL MAKIAGE is a luxury beauty brand known for its bold colors and long-lasting formulas, offering a wide range of makeup products.",
      discount: 20,
      expiryDate: "06/25/2024",
    },
    {
      id: 6,
      storeName: "LALINE",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfMdeMd9gpOOBEzjdms3TtxPN96TP_0LulKanaSul9w&s",
      description:
        "LALINE offers ethically sourced beauty products, including skincare, haircare, and body care items, made with natural ingredients.",
      discount: 15,
      expiryDate: "06/30/2024",
    },
    {
      id: 7,
      storeName: "BOBI BROEN",
      imageSrc:
        "https://i.pinimg.com/736x/ab/30/62/ab30626545eeaec82bcf54bab9f3ae3d.jpg",
      description:
        "BOBI BROWN  Professional Makeup offers high-quality makeup products at affordable prices, including a wide range of colors and textures for makeup enthusiasts.",
      discount: 25,
      expiryDate: "07/05/2024",
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
                //objectFit: "cover",
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

export default Beauty;
