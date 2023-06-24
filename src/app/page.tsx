import "../scss/home.scss";

import VTubers from "../data/vtubers";
import Image from "next/image";
import { DESTRUCTION } from "dns";

interface Props {
  name: string;
  username: string;
  description: string;
  social_media?: {
    youtube?: string;
    twitter?: string;
    twitch?: string;
  };
}

function CreateVtuber(props: Props) {
  return (
    <div className="vtuber">
      <div className="img">
        <Image
          src={`/img/avatar/${props.username}.webp`}
          width={128}
          height={128}
          alt={`${props.username}`}
        />
      </div>
      <div className="details">
        <div className="name">{props.name}</div>
        <div className="description">{props.description}</div>
        <div className="social_media">{props.social_media.youtube}</div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Virtual Doggirls</h1>
      <main className="list">
        {VTubers.map(({ name, username, description, social_media }) => (
          <CreateVtuber key={username} username={username} name={name} description={description} social_media={social_media}/>
        ))}
      </main>
    </>
  );
}
