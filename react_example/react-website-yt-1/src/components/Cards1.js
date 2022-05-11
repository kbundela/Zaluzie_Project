import React from 'react';
import './Cards1.css';
import CardItem1 from './CardItem1';

function Cards1() {
  return (
    <div className='cards1'>
      <div className='cards__container' id='ext'>
        <div className='cards__wrapper'>
        <div className='cards_main_wrapper_first_row'>
            <ul className='cards_main_items_1'>
              <CardItem1
              src='images/img_hor.jpg'
              text='Horizontální žaluzie'
              label='Více o produktu'
              path='/Horizontal'
              />              
              <CardItem1
              src='images/vertikalni_zaluzie.jpg'
              text='Vertikální žaluzie'
              label='Více o produktu'
              path='/products'
              />
            </ul>   
            <ul className='cards_main_items_2'>
              <CardItem1
              src='images/latkove_rolety.jpg'
              text='Látkové rolety'
              label='Více o produktu'
              path='/Horizontal'
              />
              <CardItem1
              src='images/rimske_rolety.jpg'
              text='Římské rolety'
              label='Více o produktu'
              path='/Horizontal'
              />
            </ul>   
          </div>
          <div className='cards_main_wrapper_second_row'>
            <ul className='cards_main_items_3'>
              <CardItem1
              src='images/rolety_noc_a_den.jpg'
              text='Rolety NOC a DEN'
              label='Více o produktu'
              path='/products'
              />
              <CardItem1
              src='images/plisse_zaluzie.jpg'
              text='Plissé žaluzie'
              label='Více o produktu'
              path='/products'
              />
            </ul> 
            <ul className='cards_main_items_4'>
              <CardItem1
              src='images/venkovni_rolety.jpg'
              text='Venkovní rolety SUNROL'
              label='Více o produktu'
              path='/Horizontal'
              />
              <CardItem1
              src='images/img_nah.jpg'
              text='Náhradní díly'
              label='Více o produktu'
              path='/products'
              />
            </ul>   
          </div>          
        </div>
      </div>
    </div>
  );
}

export default Cards1;
