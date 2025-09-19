import profile from "../assets/profile.png";

function About() {
  return (
    <div>
      <div>
        <div className="h-12text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Welcome To About Page
        </div>
        <p className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-950 to-blue-500 text-center mt-4">
          This is the Potatos Application Page.
        </p>
        <div>
          <img src={profile} height={100} width={200} alt="" class="mx-auto p-6" />
        </div>
        <div className="text-center mt-6 justify-center items-center flex flex-col gap-4 text-xl">
                Hello My Name is Theeraphat Phatjinda You can callme "Drew" I'm From Thailand & I'm 22 Years Old.
                I'm Studying Bachelor of Information Technology Major in ITI at King Mongkut's North Bangkok University.
                I'm Interested in Web Development.
                I'm Happy to Join This Class.
                I'm Looking Forward to Learning More About Web Development and Improving My Skills in This Field.
                <h1 className="text-red-400">Nice To Meet You All !</h1>
        </div>
      </div>
    </div>
  );
}

export default About;
