var posts=["2026/03/13/Docker/","2026/03/13/Maybatis-Plus/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };