import heroImg from "./assets/images/illustration-article.svg";
import avatarImg from "./assets/images/image-avatar.webp";

export const App = () => {
  return (
    <div className="bg-[#F4D04E] h-screen">
      <div className="w-[327px] h-max p-6">
        <div>
          <img src={heroImg} alt="hero image" />
        </div>
        <div>
          <span>Learning</span>
          <span>PUblished 21 Dec 2023</span>
          <span>HTML & CSS foundations</span>
          <span>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </span>
        </div>
        <div>
          <div>
            <img src={avatarImg} alt="avatar" />
          </div>
          <span>Greg Hooper</span>
        </div>
      </div>
    </div>
  );
};
