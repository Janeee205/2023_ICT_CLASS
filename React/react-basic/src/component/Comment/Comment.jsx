import React from 'react';

let styles = {
  wrapper: {
    display: 'flex',
    padding: '0 20px',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '10px'
  },

  img: {
    width: '50px',
    height: '50px',
    borderRadius: '50%'
  },

  contentBox: {
    flexGrow: '1',
    marginLeft: '20px'
  }

}

const Comment = () => {
  return (
    <div style={styles.wrapper}>
      <div >
        <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="프로필이미지" style={styles.img} />
      </div>

      <div style={styles.contentBox}>
        <h3>user name</h3>
        <p>Content</p>
      </div>

      <button type='button'> X </button>
    </div>
  );
};

export default Comment;