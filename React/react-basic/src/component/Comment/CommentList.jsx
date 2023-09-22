import React, { useCallback, useState } from 'react';
import Comment from './Comment';

let comments = [
  {
    name: '김주은',
    content: 'ㅎㅇ'
  },

  {
    name: 'ㄱㅈㅇ',
    content: '집가서 겜해야되는데'
  },

  {
    name: '김김김',
    content: '아씨 알바가야돼'
  }
]


const CommentList = () => {

  let [list, setList] = useState(comments);
  let [name, setName] = useState('');
  let [text, setText] = useState('');

  // 삼항연산자로 value 값이 빈 값이라면 list가 추가되지 않고 alert창 띄우기
  let addComment = () => {
    name === '' || text === '' ? alert('이름과 글을 입력하세요.') : (
      // 즉시 실행 함수(IIFE)
      // 삼항연산자 조건이 false일 때 -> name, text에 값이 있을 때 다음 함수가 즉시 실행되도록 한다.
      (() => {
        let add = { name: name, content: text };
        setList([add, ...list]);
        setName('');
        setText('');
      })()
    )
  }

  let deleteComment = (index) => {
    let newList = [...list];
    // splice(배열 변경할 인덱스 값, 제거할 요소의 수);
    // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
    newList.splice(index, 1);
    setList(newList);
    console.log(index);
  }

  return (
    <div>
      {
        list.map((item, i) => {
          return (
            <Comment name={item.name} text={item.content} key={i} delete={() => deleteComment(i)} />
          )
        })
      }

      <span>작성자 : <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></span>
      <span>내용 : <input type="text" value={text} onChange={(e) => setText(e.target.value)} /></span>
      <button type='button' onClick={() => { addComment() }}>글 작성</button>
    </div>
  );
};


export default CommentList;