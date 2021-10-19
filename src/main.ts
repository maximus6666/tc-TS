type Post = {
  postId: number;
  id: number;
  title: string;
  body: string;
}

const wrapper = document.querySelector(".wrapper");

const fetchPosts = async (link:string): Promise<Post[]> => {
  try {
    const res = await fetch(link);
    const data = res.json();
    return data;
  }
  catch(err) {
    console.error(err);
  }
}

const displayPostsTitle = async () => {
  const posts:Post[] = await fetchPosts("https://jsonplaceholder.typicode.com/posts");
  for (let post of posts) {
    const div = document.createElement('div');
    div.innerText = post.title;
    div.style.padding = '5px';
    wrapper.append(div);
  }  
}

displayPostsTitle();

////updateObjectInArray
const updateObjectInArray = <T> (
  initialArray:T[], 
  keyToFind:string, 
  keyValueToFind:string | number | boolean, 
  patch:Partial<T>
  ) => {
    const newArray = initialArray.map((el) => {
      if (el[keyToFind] === keyValueToFind) {   
      
      return {...el, ...patch};
      }

      return el;
    });

    return newArray;
}

type User = {
  id:number,
  name:string
};

const arrayOfUsers:User[] = [{id: 8, name:'Oksana'},{id: 1, name:'qqq'},{id: 2, name:'Oleg'}];

const copy = updateObjectInArray <User>(arrayOfUsers, 'id', 1, {id: 33});
const copy2 = updateObjectInArray <User>(arrayOfUsers, 'name', 'qqq', {name: 'Ivan'});

console.log(arrayOfUsers, 'arayOfUsers');
console.log(copy, 'copy');
console.log(copy2, 'copy2');
