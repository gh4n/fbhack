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
  let imgRef = db.ref('photos').child(imageId).child('comment');
  console.log(imageId);
  console.log(imgRef);
  imgRef.push(comment)
}


export const addPhoto = () =>
    db.ref('photos').push({
      image_url: "images/image1.jpg",
      comments: {}
    });

export const getComments = (imageId) => {
   // returns json of all comments for a specific image path
    let data = db.ref('photos').child(imageId).child('comment');
    data.on('value', function(snapshot) {
      return snapshot.val();
    });
}



// Other db APIs ...
