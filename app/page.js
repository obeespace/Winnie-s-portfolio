import Image from "next/image";
import profile from "../public/winnie.jpg";

export default function Home() {
  return (
    <main className="text-white lg:flex justify-evenly pt-10 lg:pt-20 w-5/6 mx-auto">
      <div>
        <Image src={profile} alt="profile" className="rounded-md" />
      </div>
      <div className="lg:w-5/12 mt-5 lg:mt-0">
        <p className="text-2xl font-semibold mb-3">Hello!</p>
        <p className="mb-5">
          I'm Winnie Sunday: a creative versatile writer, counsellor and Media
          Personality. I've been crafting stories and content since 2017 when I
          created my blog. I have a strong desire for research and critical
          thinking, which I incorporates into my writing to produce engaging and
          informative content.
        </p>
        <p className="mb-5">
          My writing style is characterized by a strong voice, vivid
          descriptions, and a keen eye for detail. Whether I am writing a novel,
          an article, a video/movie script, a blog post, or a marketing copy, I
          always strives to connect with the reader and deliver a message that
          resonates.
        </p>
        <p className="mb-5">
          Over the years, I have worked on a variety of writing projects,
          including Alison, FMG Nigeria, Hubziltech Ltd, NNS, self articles and
          others. I am constantly seeking new challenges and opportunities to
          expand my skills and push myself as a writer.
        </p>

        <p className="mb-5">
          On the counseling side, I am a Certified Love, Dating, Relationship,
          Counselor. With over 4 years of counselling experience starting from
          new converts/believers counselling to relationship counselling.
        </p>

        <p className="mb-5">
          On the media side, check my gallery so I don't rob you off the fun.
        </p>

        <p>Let's work together. Contact me using any of the icons below.</p>
      </div>
    </main>
  );
}
