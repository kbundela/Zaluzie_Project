import React from 'react';
import { Link } from 'react-router-dom';

function CardItem1(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards_main_item__pic-wrap' data-category={props.label}>
            <img className='cards__item__img' alt='img' src={props.src} />
          </figure>
          <div className='cards_main_item__info'>
            <h3 className='cards__item__text'>{props.text}</h3>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem1;
