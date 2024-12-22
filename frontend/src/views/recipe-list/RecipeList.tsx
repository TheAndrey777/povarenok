import RecipeItem from "./RecipeItem";

const RecipeList = () => {
  const items = [
    {
      id: 12,
      title: "Оливье",
      img: "https://static.mk.ru/upload/entities/2020/12/09/16/articles/facebookPicture/0f/8e/35/b7/3d58d2f1da58bb5824a2b298e4959103.jpg",
      description:
        "Оливье - Царь салат! Подборка лучших праздничных салатов в нашем новогоднем спецпОливье - Царь салат! Подборка лучших праздничных салатов в нашем новогоднем спецпОливье - Царь салат! Подборка лучших праздничных салатов в нашем новогоднем спецпроекте\nПодборка лучших праздничных салатов в нашем \nновогоднем спецпроекте\nв нашем новогоднем спецпроекте",
      author: "Алексей Скобелев",
      like: 123,
      dislike: 123,
      favourites: 123,
      ingredients: [
        { name: "Яйца", count: "10 шт." },
        { name: "Майонез", count: "150 г." },
      ],
      time: "30 мин",
    },
    {
      id: 132,
      title: "Сырники из творога",
      img: "https://avatars.dzeninfra.ru/get-zen_doc/1930771/pub_5f21cff66da60158548c42c6_5f21d00b7c64f45cde71ea88/scale_1200",
      description:
        "Оливье - Царь салат! Подборка лучших праздничных салатов в нашем новогоднем спецпроекте\nПодборка лучших праздничных салатов в нашем новогоднем спецпроекте\nв нашем новогоднем спецпроекте",
      author: "Алексей Скобелев",
      like: 12,
      dislike: 1,
      favourites: 1,
      ingredients: [{ name: "Яйца", count: "10 шт." }],
      time: "30 мин",
    },
    {
      id: 132,
      title: "Холодец",
      img: "https://primemeat.ru/about/kak-gotovit-holodec.jpg",
      description:
        "Оливье - Царь салат! Подборка лучших праздничных салатов в нашем новогоднем спецпроекте\nПодборка лучших праздничных салатов в нашем новогоднем спецпроекте\nв нашем новогоднем спецпроекте",
      author: "Алексей Скобелев",
      like: 12,
      dislike: 1,
      favourites: 1,
      ingredients: [
        { name: "Яйца", count: "10 шт." },
        { name: "Майонез", count: "150 г." },
        { name: "Колбаса вареная", count: "300 г." },
        { name: "Картофель вареный", count: "500 г." },
        { name: "Майонез", count: "150 г." },
        { name: "Колбаса вареная", count: "300 г." },
        { name: "Картофель вареный", count: "500 г." },
      ],
      time: "30 мин",
    },
    {
      id: 132,
      title: "Борщ",
      img: "https://avatars.mds.yandex.net/i?id=b147110a5c6ded8ddd20ef8e6f26fc97_l-5205578-images-thumbs&n=13",
      description:
        "Оливье - Царь салат! Подборка лучших праздничных салатов в нашем новогоднем спецпроекте\nПодборка лучших праздничных салатов в нашем новогоднем спецпроекте\nв нашем новогоднем спецпроекте",
      author: "Алексей Скобелев",
      like: 12,
      dislike: 1,
      favourites: 1,
      ingredients: [
        { name: "Яйца", count: "10 шт." },
        { name: "Майонез", count: "150 г." },
        { name: "Колбаса вареная", count: "300 г." },
        { name: "Картофель вареный", count: "500 г." },
        { name: "Картофель вареный", count: "500 г." },
      ],
      time: "30 мин",
    },
    {
      id: 12,
      title: "Оливье",
      img: "https://static.mk.ru/upload/entities/2020/12/09/16/articles/facebookPicture/0f/8e/35/b7/3d58d2f1da58bb5824a2b298e4959103.jpg",
      description:
        "Оливье - Царь салат! Подборка лучших праздничных салатов в нашем новогоднем спецпОливье - Царь салат! Подборка лучших праздничных салатов в нашем новогоднем спецпОливье - Царь салат! Подборка лучших праздничных салатов в нашем новогоднем спецпроекте\nПодборка лучших праздничных салатов в нашем \nновогоднем спецпроекте\nв нашем новогоднем спецпроекте",
      author: "Алексей Скобелев",
      like: 123,
      dislike: 123,
      favourites: 123,
      ingredients: [
        { name: "Яйца", count: "10 шт." },
        { name: "Майонез", count: "150 г." },
      ],
      time: "30 мин",
    },
    {
      id: 132,
      title: "Сырники из творога",
      img: "https://avatars.dzeninfra.ru/get-zen_doc/1930771/pub_5f21cff66da60158548c42c6_5f21d00b7c64f45cde71ea88/scale_1200",
      description:
        "Оливье - Царь салат! Подборка лучших праздничных салатов в нашем новогоднем спецпроекте\nПодборка лучших праздничных салатов в нашем новогоднем спецпроекте\nв нашем новогоднем спецпроекте",
      author: "Алексей Скобелев",
      like: 12,
      dislike: 1,
      favourites: 1,
      ingredients: [{ name: "Яйца", count: "10 шт." }],
      time: "30 мин",
    },
    {
      id: 132,
      title: "Холодец",
      img: "https://primemeat.ru/about/kak-gotovit-holodec.jpg",
      description:
        "Оливье - Царь салат! Подборка лучших праздничных салатов в нашем новогоднем спецпроекте\nПодборка лучших праздничных салатов в нашем новогоднем спецпроекте\nв нашем новогоднем спецпроекте",
      author: "Алексей Скобелев",
      like: 12,
      dislike: 1,
      favourites: 1,
      ingredients: [
        { name: "Яйца", count: "10 шт." },
        { name: "Майонез", count: "150 г." },
        { name: "Колбаса вареная", count: "300 г." },
        { name: "Картофель вареный", count: "500 г." },
        { name: "Майонез", count: "150 г." },
        { name: "Колбаса вареная", count: "300 г." },
        { name: "Картофель вареный", count: "500 г." },
      ],
      time: "30 мин",
    },
    {
      id: 132,
      title: "Борщ",
      img: "https://avatars.mds.yandex.net/i?id=b147110a5c6ded8ddd20ef8e6f26fc97_l-5205578-images-thumbs&n=13",
      description:
        "Оливье - Царь салат! Подборка лучших праздничных салатов в нашем новогоднем спецпроекте\nПодборка лучших праздничных салатов в нашем новогоднем спецпроекте\nв нашем новогоднем спецпроекте",
      author: "Алексей Скобелев",
      like: 12,
      dislike: 1,
      favourites: 1,
      ingredients: [
        { name: "Яйца", count: "10 шт." },
        { name: "Майонез", count: "150 г." },
        { name: "Колбаса вареная", count: "300 г." },
        { name: "Картофель вареный", count: "500 г." },
        { name: "Картофель вареный", count: "500 г." },
      ],
      time: "30 мин",
    },
  ];
  return (
    <div>
      {items.map((v, i) => (
        <RecipeItem
          key={i}
          id={v.id}
          title={v.title}
          img={v.img}
          description={v.description}
          author={v.author}
          like={v.like}
          dislike={v.dislike}
          favourites={v.favourites}
          ingredients={v.ingredients}
          time={v.time}
        />
      ))}
    </div>
  );
};

export default RecipeList;
