import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');


export const addComment = (imageId, comment) => {
  let imgRef = db.ref('photos').child(imageId);
  imgRef.update({comment: comment})
}


export const addPhoto = () =>
    db.ref('photos').push({
      image_url: "images/image1.jpg",
      comments: {}
    });



// Other db APIs ...
