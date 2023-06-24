import "../scss/home.scss";

import VTubers from "../data/vtubers";
import Image from "next/image";

interface Props {
  username: string;
  name: string;
}

function CreateVtuber(props: Props) {
  return (
    <div className="vtuber">
      <div className="img">
        <Image
          src={`/img/avatar/${props.username}.webp`}
          width={144}
          height={144}
          alt={`${props.username}`}
        />
      </div>
      <div className="details">{props.name}</div>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Virtual Doggirls</h1>
      <main className="list">
        {VTubers.map(({ name, username }) => (
          <CreateVtuber key={username} username={username} name={name} />
        ))}
      </main>
    </>
  );
}
