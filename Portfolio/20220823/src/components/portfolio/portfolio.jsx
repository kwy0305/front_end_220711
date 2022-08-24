import "./portfolio.css";

const portfolio = () => {
  return (
    <div id="portfolio" className="container portfolio-container">
      <h1 className="portfolio-txt">Portfolio</h1>
      <div className="portfolio portfolio-1">
        <div className="portfolio-img"></div>
        <div className="portfolio-info">
          <h1 className="name">Project 1</h1>
          <h3 className="position">영화검색 사이트 </h3>
          <h4 className="about">TMDB API를 사용하여 영화 검색 사이트 만들기</h4>
          <a href="#contact" className="contact-portfolio">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="portfolio portfolio-2">
        <div className="portfolio-img"></div>
        <div className="portfolio-info">
          <h1 className="name">Project 2</h1>
          <h3 className="position">인스타그램 클론코딩</h3>
          <h4 className="about">React를 활용한 인스타그램 클론코딩</h4>
          <a href="#contact" className="contact-portfolio">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="portfolio portfolio-3">
        <div className="portfolio-img"></div>
        <div className="portfolio-info">
          <h1 className="name">Project 3</h1>
          <h3 className="position">비플레인 클론코딩</h3>
          <h4 className="about">
            HTML, CSS, JS를 활용한 비플레인 웹사이트 클론코딩
          </h4>
          <a href="#contact" className="contact-portfolio">
            <span>contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
