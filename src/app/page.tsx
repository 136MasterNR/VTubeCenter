import "../scss/home.scss";

import data from "../data/vtubers.json";
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
        {data.doggirls.map((item) => (
          <CreateVtuber
            key={item.username}
            username={item.username}
            name={item.name}
          />
        ))}
      </main>
    </>
  );
}
