import React from 'react';
import SortingItem from '../materialItem/SortingItem';
import s from './SortingList.module.scss';

const SortingList = ({materials}) => {
  return (
    <div className={s.cards}>
      {materials.map(material =>(
        <SortingItem key={material.id} material={material}/>
      ))}
    </div>
  );
};

export default SortingList;