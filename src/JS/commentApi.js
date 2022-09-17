class Comments {
  static postComments = async (id, name, comment) => {
    const res = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0R3ry3Cxsg0WOw831pSH/comments',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: id,
          username: name,
          comment,
        }),
      },
    );
    const post = await res.text();
    return post;
  };

  static getComments = async (id) => {
    const res = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0R3ry3Cxsg0WOw831pSH/comments?item_id=${id}`,
    );
    const comment = await res.json();
    return comment;
  };
}

export default Comments;