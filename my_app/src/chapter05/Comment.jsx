import React from 'react'

const styles = {
  wrapper: {
    width: 300,
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 16,
  }

}

function Comment(props) {
  return (
    <div style={ styles.wrapper }>
      <div style={styles.imageContainer}>
        <img src="https://w.namu.la/s/fdc097d5d2e9233c5def0a36a8255a3f11d0d50dda0d47227f756e843b76d0ca5c4f6815e3732781dad6627b362cbae3c4bc1bfe3a7ad76053fadfc924f55f29380947159688453c9f3cce52730d4e41ec41972e772e1e632f7d622c5e577c7f" alt="park" style={styles.image}/>
      </div>

      <div style={ styles.contentContainer }>
        <span style={styles.nameText}>Park Habok</span>
        <span style={styles.commentText}>This is comment section.</span>

      </div>

    </div>
  );
}

export default Comment;