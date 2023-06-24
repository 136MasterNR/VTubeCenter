import Link from 'next/link';
import Head from "next/head";
import Image from 'next/image';
import { HomeStyled } from './styles';
import data from '../../public/vtubers.json';
import { useState } from 'react';

interface Props {
  username: string;
  name: string;
}

function CreateVtuber(props: Props) { return (
  <li className='vtuber'>
    <div className='img'>
      <Image
        src={`/img/${props.username}.webp`}
        width={144}
        height={144}
        alt={`${props.username}`}
      />
    </div>
    <div className='details'>
      {props.name}
    </div>
  </li>
);}

/* Index */
export default function Test(): JSX.Element {
  return (
    <>
      <Head>
        <title>Virtual Doggirls</title>
        <meta content="Virtual Doggirls" property="og:title" />
      </Head>
      <h1 style={{ textAlign: "center" }}>Virtual Doggirls</h1>
      <HomeStyled>
        {data.doggirls.map((item) => (
          <CreateVtuber key={item.username} username={item.username} name={item.name} />
        ))}
      </HomeStyled>
    </>
  );
}
