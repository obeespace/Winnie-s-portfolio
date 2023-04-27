import Image from "next/image";
import profile from '../public/winnie.jpg'

export default function Home() {
  return (
    <main className="text-white lg:flex justify-evenly pt-10 lg:pt-20 w-5/6 mx-auto">
      <div>
        <Image src={profile} alt="profile" className="rounded-md" />
      </div>
      <div className="lg:w-5/12 mt-5 lg:mt-0">
      <p className="text-2xl font-semibold mb-3">Hello!</p>
        <p className="mb-5">
          Phasellus molestie facilisis commodo. Aliquam ultricies at enim a
          pulvinar. Donec sodales pellentesque arcu. Ut vel porta arcu. Maecenas
          congue ex nec gravida pretium. Donec molestie vitae turpis quis
          blandit. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Maecenas ut accumsan ex. Fusce consequat, justo
          pulvinar posuere iaculis, quam elit pellentesque quam, eget fermentum
          velit risus at ipsum.
        </p>
        <p className="mb-5">
          Pellentesque augue sapien, ultricies vestibulum ornare ut, efficitur
          eget lectus. Cras vitae lobortis purus. Suspendisse varius purus
          dignissim sapien facilisis, pulvinar dictum sem tincidunt. Suspendisse
          facilisis mi ante, nec vulputate nisi ornare non. Duis blandit ex sem,
          at tincidunt nibh commodo vulputate. Curabitur elementum dictum lorem
          sit amet dapibus. Aenean hendrerit lorem tincidunt varius pharetra.
        </p>
        <p className="mb-5">
          Mauris at nibh venenatis, aliquet sem ut, elementum tortor.
          Suspendisse euismod eu metus eget laoreet. Morbi a malesuada libero.
          Nulla facilisi. Proin fermentum leo sit amet velit interdum facilisis.
          Nulla tincidunt sodales dapibus. Curabitur quis mattis nisl. Vivamus
          dignissim leo in ipsum ullamcorper hendrerit. Nulla elementum ipsum
          egestas, rutrum felis eu, dictum massa. Proin ac dapibus leo.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae;
        </p>
      </div>
    </main>
  );
}
