import Link from 'next/link';
import Head from "next/head";
import Image from 'next/image';
import { HomeStyled } from "./styles";
import data from '../../public/vtubers.json';
import { useState } from 'react';

interface Props {
  img: string;
}

function CreateVtuber(props: Props) {

  return <Image
    src={`/img/${props.img}.webp`}
    width={144}
    height={144}
    alt=""
  />
}


/* Index  */
export default function Test() {

  return (
    <>
    <Head>
      <title>Virtual Doggirls</title>
      <meta content="Virtual Doggirls" property="og:title"/>
    </Head>
    <HomeStyled>
      {data.doggirls.map((item) => (
        <li key={item.username}>
          <h2>{item.username}</h2>
          <CreateVtuber img={item.username}/>
        </li>
      ))}
    </HomeStyled>
    </>
  );
}
