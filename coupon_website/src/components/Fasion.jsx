import React from 'react';

export const Fashion = () => {
  const coupons = [
    {
      id: 1,
      storeName: 'Berska',
      imageSrc: 'https://loghi-famosi.com/wp-content/uploads/2021/02/Logo-della-Bershka.png',
      description: 'Berska is a leading fashion store in the over the country, offering a wide range of clothing and accessories.',
      discount: 15,
      expiryDate: '06/01/2024'
    },
    {
      id: 2,
      storeName: 'Zara',
      imageSrc: 'https://th.bing.com/th/id/OIP.l67ReJoE4CJJz_3gN8PGzgHaDH?rs=1&pid=ImgDetMain',
      description: 'Zara is a trendy and innovative fashion store, offering stylish and refreshing collections.',
      discount: 20,
      expiryDate: '06/15/2024'
    },
    {
      id: 3,
      storeName: 'Pull&Bear',
      imageSrc: 'https://th.bing.com/th/id/R.f78a9216a195c19246380175ea7ea800?rik=Vb6v1PiZDok63Q&pid=ImgRaw&r=0',
      description: 'Pull&Bear specializes in urban streetwear, providing a mix of casual and edgy styles for the modern individual.',
      discount: 10,
      expiryDate: '06/10/2024'
    },
    {
        id: 4,
        storeName: 'TwentyFourSeven',
        imageSrc: 'https://th.bing.com/th/id/R.7c8f57b70431eab5bb64e61b5b7cf67b?rik=xzMp5Cl7MHEOxg&riu=http%3a%2f%2fwww.scooper.co.il%2fpr%2f1008966%2f8877a007-6d40-4196-8474-98b58de25b0b%2f0%2ftwentyfourseven+.jpg&ehk=%2fQsyomdraH%2b6HR4O3c%2bgKric9%2fLj7EjlndUQ%2fHiNUyI%3d&risl=&pid=ImgRaw&r=0',
        description: 'TwentyFourSeven is a trendy fashion store offering a curated selection of stylish and unique clothing and accessories.',
        discount: 25,
        expiryDate: '06/20/2024'
      },
      {
        id: 5,
        storeName: 'ALDO',
        imageSrc: 'https://th.bing.com/th/id/R.186bfaaed9164fc66f34db330b3b5c31?rik=eohApnyx5jlahg&riu=http%3a%2f%2fgigamall.com.vn%2fdata%2f2019%2f05%2f06%2f13414279_logo-aldo-500x500_thumbnail.jpg&ehk=04EmwFrig9igiQI1qaiyrU%2f7m9u%2f1tCeWE76x%2f0IhYA%3d&risl=&pid=ImgRaw&r=0',
        description: 'ALDO specializes in urban chooses, providing a mix of casual and edgy styles for the modern individual.',
        discount: 30,
        expiryDate: '06/25/2024'
      },
      {
        id: 6,
        storeName: 'Foot Locker',
        imageSrc: 'https://th.bing.com/th/id/R.e39906ab94afc4599272a916931ac6e8?rik=qebNPTstJIKvvg&pid=ImgRaw&r=0',
        description: 'Foot Locker is a sustainable fashion store committed to eco-friendly practices, offering organic and recycled clothing options.',
        discount: 20,
        expiryDate: '06/15/2024'
      },
      {
        id: 7,
        storeName: 'Adidas',
        imageSrc: 'https://i.pinimg.com/originals/b1/df/b5/b1dfb5e88bc801359a2063a7dda9f28b.jpg',
        description: 'Adidas is an elegant fashion store specializing in timeless classics, providing high-quality and sophisticated clothing.',
        discount: 15,
        expiryDate: '06/10/2024'
      }
      
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
    {coupons.map(coupon => (
      <div key={coupon.id} style={{ border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
        <h2>{coupon.storeName}</h2>
        <div style={{ width: '100%', paddingBottom: '75%', position: 'relative' }}>
          <img 
            src={coupon.imageSrc} 
            alt={coupon.storeName} 
            style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <p><strong>Description:</strong> {coupon.description}</p>
        <p><strong>Discount Percentage:</strong> {coupon.discount}%</p>
        <p><strong>Expiry Date:</strong> {coupon.expiryDate}</p>
      </div>
    ))}
  </div>
  );
};

export default Fashion;