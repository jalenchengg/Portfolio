"use client";

export default function Page() {
  return (
    <div className="flex flex-col max-w-6xl md:my-24 w-full mx-auto justify-center gap-8">
      <div className="flex justify-end"></div>
      <p id="staggerchild">Great to virtually connect with you!</p>
      <p id="staggerchild">
        I've been navigating the world of software development for the past 3
        years, building robust applications and honing my skills in front-end
        web development. I find joy in the complexity of creating seamless
        digital experiences.
      </p>
      <p id="staggerchild">
        Feel free to dive into my journey, explore my projects, and discover
        more about the coding adventures I've embarked on. Passionate about
        knowledge sharing, I also contribute to the developer community,
        offering insights and lessons in my{" "}
        <a
          className="font-bold"
          href="https://github.com/jalenchengg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>GitHub</strong>
        </a>
        . Open to new opportunities that align with my skills and passion, I'm
        eager to connect with fellow tech enthusiasts, potential collaborators,
        and anyone interested in the ever-evolving landscape of software
        development. Let's code, collaborate, and create something amazing
        together!
      </p>
    </div>
  );
}
