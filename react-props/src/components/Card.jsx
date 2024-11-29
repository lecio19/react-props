import style from "../components/card.module.css";
import posts from "../components/posts";


export default function Card() {
  const publishedPosts = posts.filter((post) => post.published);

  return (
    <>
      <main className={style.background}>
        <div className={style.container}>
        {publishedPosts.length > 0
            ? publishedPosts.map((post) => ( 
                <div key={post.id} className={style.cardbody}>
                  <img src= {post.image} alt="" />
                  <h3>
                  {post.title} {post.id}
                  </h3>
                  <h5>Tag: {post.tags.join(" ")}</h5>
                  <p>Contenuto: {post.content}</p>
                </div>
              ))
            : ""}
        </div>
      </main>
    </>
  );
}