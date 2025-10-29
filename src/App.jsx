import heroImg from "./assets/images/illustration-article.svg";
import avatarImg from "./assets/images/image-avatar.webp";

export const App = () => {
  return (
    <div className="min-w-[350px] flex justify-center items-center bg-[#F4D04E] h-screen max-w-[375px] sm:max-w-full font-['Figtree']">
      <div className=" w-[327px] sm:w-[384px] h-max p-6 rounded-xl border border-black bg-white drop-shadow-[8px_8px_rgba(0,0,0,1)] ">
        <div className="h-full w-full mb-6">
          <img src={heroImg} alt="hero image" className="rounded-lg"/>
        </div>
        <div className="flex flex-col gap-3  mb-6">
          <span className="bg-[#F4D04E] font-extrabold text-xs w-max px-3 py-1 rounded-md ">Learning</span>
          <span className="font-medium text-xs text-[#111111]">Published 21 Dec 2023</span>
          <span className="font-extrabold text-lg text-[#111111] hover:text-[#F4D04E] hover:cursor-pointer">HTML & CSS foundations</span>
          <span className="font-medium text-md text-[#6b6b6b]">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-[32px] h-[32px]">
            <img src={avatarImg} alt="avatar" />
          </div>
          <span className="font-extrabold text-md text-[#111111]">Greg Hooper</span>
        </div>
      </div>
    </div>
  );
};
