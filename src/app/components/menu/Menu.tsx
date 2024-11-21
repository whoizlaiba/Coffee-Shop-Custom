import React from 'react';
import Image from 'next/image';
import style from "./page.module.css";

const Menu = () => {
  const menuItems = [
    { name: 'Espresso', description: 'Strong, rich, and bold coffee.', price: '$3.50', image: '/espresso.jpeg' },
    { name: 'Latte', description: 'Creamy espresso with steamed milk.', price: '$4.00', image: '/latte.jpeg' },
    { name: 'Cappuccino', description: 'Espresso with steamed milk and foam.', price: '$4.50', image: '/cappuccino.jpg' },
    { name: 'Croissant', description: 'Buttery, flaky pastry fresh from the oven.', price: '$2.50', image: '/croissant.jpeg' },
    { name: 'Blueberry Muffin', description: 'Delicious and moist with a burst of blueberries.', price: '$2.00', image: '/muffin.webp' },
    { name: 'Chocolate Chip Cookie', description: 'Chewy and filled with chocolate chips.', price: '$1.75', image: '/cookie.jpeg' },
    { name: 'Americano', description: 'Espresso with hot water, bold and simple.', price: '$3.00', image: '/americano.webp' },
    { name: 'Macchiato', description: 'Espresso with a dash of steamed milk.', price: '$3.75', image: '/macchiato.avif' },
    { name: 'Mocha', description: 'Chocolate and espresso with steamed milk.', price: '$4.25', image: '/mocha.avif' },
    { name: 'Iced Coffee', description: 'Chilled coffee served over ice.', price: '$2.75', image: '/iced-coffee.avif' },
    { name: 'Tea', description: 'Classic black or green tea.', price: '$2.00', image: '/tea.avif' },
    { name: 'Bagel', description: 'Freshly baked bagels with cream cheese.', price: '$2.25', image: '/bagel.avif' }
  ];

  return (
    <div className={`${style.menusection}`} id="menu">
      <div className={`${style.container}`}>
        <h2 className={`${style.menutitle}`}>Coffee Shop Menu</h2>
        
        <div className={`${style.menugrid}`}>
          {menuItems.map((item, index) => (
            <div key={index} className={`${style.menuitem}`}>
              <Image
               className={`${style.menuitemimage}`}
                src={item.image}  
                alt={item.name}
                width={1000}
                height={1000}
              />
              <h3  className={`${style.menuitemname}`}>{item.name}</h3>
              <p  className={`${style.menuitemdescription}`}>{item.description}</p>
              <span  className={`${style.menuitemprice}`}>{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;

