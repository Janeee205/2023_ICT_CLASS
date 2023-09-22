import React from 'react';
import './Cards.css'

// 부모컴포넌트
const Cards = () => {
  let data = [
    { title: 'Title1', content: 'Lorem ipsum dolor sit amet' },
    { title: 'Title2', content: 'Lorem ipsum dolor sit amet' },
    { title: 'Title3', content: 'Lorem ipsum dolor sit amet' }
  ]

  return (
    <section className='post-card-list'>
      {
        data.map((item, index) => {
          return (
            // 자식에게 데이터를 넘긴다
            <Card title={item.title} content={item.content} key={index} />
          )
        })
      }
    </section>
  )
};

// 자식컴포넌트
function Card(props) {
  return (
    <div className='post-card' key={props.key}>
      <h2>{props.title}</h2>
      <p className='post-card-txt'>{props.content}</p>
    </div >
  )
}

export default Cards;