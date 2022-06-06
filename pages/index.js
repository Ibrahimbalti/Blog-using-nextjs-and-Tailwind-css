import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Blog from "./Blog";
export default function Home() {
  return (
    <div className='text-center'>
      <h1 className='font-bold text-4xl'>Blog</h1>
      <p className='mt-3'>This a supporting blog</p>
      <Blog />
    </div>
  );
}
