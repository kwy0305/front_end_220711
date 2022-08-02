let movieList = [
  {
    id: 1,
    title: "범죄도시2",
    actors: "마동석, 손석구",
    star: 4.5,
  },
  {
    id: 2,
    title: "외계+인",
    actors: "류준열, 김우빈",
    star: 4,
  },
  {
    id: 3,
    title: "마녀 2",
    actors: "신시아, 김다미",
    star: 5,
  },
];

// 전달받은 props를 매개변수에서 비구조화 할당
function Movie({ item }) {
  //props : { item : {title : "...", actors : "...", start : "..."} }
  const { title, actors, star } = item;
  return (
    <li>
      <h2>{title}</h2>
      <div>{actors}</div>
      <div>{star}</div>
    </li>
  );
}

function MovieList() {
  return (
    <ul>
      {/* 
          jsx 안에 배열값을 넣으면 순서대로 출력된다.  
          Array.prototype.map으로 데이터를 jsx 형식으로 만들어 새로운 배열을 반환한다.
        */}
      {movieList.map((movie) => {
        // movieList의 각 요소를 movie 프로퍼티로 전달
        return <Movie item={movie} />;
      })}
    </ul>
  );
}

export default MovieList;
