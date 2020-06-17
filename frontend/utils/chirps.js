export const getChirps = () => $.ajax({
  url: '/api/chirps',
});

export const postLikeToChirp = id => $.ajax({
  url: '/api/likes',
  method: 'POST',
  data: { id },
});

export const deleteLikeFromChirp = id => $.ajax({
  url: '/api/likes',
  method: 'DELETE',
  data: { id },
});

export const postUser = user => $.ajax({
  url: '/api/users',
  method: 'POST',
  data: { user }
});

export const postSession = user => $.ajax({
  url: '/api/session',
  method: 'POST',
  data: { user }
});

export const deleteSession = () => $.ajax({
  url: '/api/session',
  method: 'DELETE'
})
