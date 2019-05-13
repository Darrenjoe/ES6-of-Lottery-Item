{
  // 基本定义
  let ajax = function (cb) {
    console.log('执行');
    setTimeout(function () {
      cb && cb.call()
    }, 1000)
  };
  ajax(function() {
    console.log('timeout1');
  })
}

{
  let ajax = function () {
    console.log('执行2');
    // resolve 表示下一步执行操作
    // reject 表示终止操作
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve();
      }, 1000);
    })
  };
  ajax().then(function() {
    console.log('promise', 'timeout2');
  });
}

{
  let ajax = function () {
    console.log('执行3');
    // resolve 表示下一步执行操作
    // reject 表示终止操作
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve();
      }, 1000);
    })
  };
  ajax()
    .then(function() {
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve();
      }, 2000);
    })
    .then(function() {
      console.log('timeout3');
    })
  });
}

{
  let ajax = function (num) {
    console.log('执行4');
    return new Promise(function(resolve, reject) {
      if (num > 5) {
        resolve();
      } else {
        throw new Error('出错了')
      }
    })
  };

  ajax(6).then(() => {
    console.log('log', 6);
  }).catch((err) => {
    console.log('catch', err)
  });

  ajax(3).then(() => {
    console.log('log', 3);
  }).catch((err) => {
    console.log('catch', err)
  });
}

{
  // 所有图片加载完再添加到页面
  function loadImg(src){
    return new Promise((resolve,reject)=>{
      let img=document.createElement('img');
      img.src=src;
      img.onload=function(){
        resolve(img);
      }
      img.onerror=function(err){
        reject(err);
      }
    })
  }

  function showImgs(imgs){
    imgs.forEach(function(img){
      document.body.appendChild(img);
    })
  }

  Promise.all([
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
    loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')
  ]).then(showImgs)

}

{
  // 有一个加载完就显示一个
  function loadImg(src){
    return new Promise((resolve,reject)=>{
      let img=document.createElement('img');
      img.src=src;
      img.onload=function(){
        resolve(img);
      }
      img.onerror=function(err){
        reject(err);
      }
    })
  }

  function showImgs(img){
    let p = document.createElement('p');
    p.appendChild(img)
    document.body.appendChild(p);
  }

  Promise.race([
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
    loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')
  ]).then(showImgs)
}
