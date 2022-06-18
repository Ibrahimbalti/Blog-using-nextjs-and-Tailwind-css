import Blog from "./Blog";
import * as fs from "fs";
export default function Home({ data }) {
  return (
    <div className='text-center'>
      <h1 className='font-bold text-4xl'>Blog</h1>
      <p className='mt-3'>This a supporting blog</p>
      <Blog data={data} />
    </div>
  );
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");

  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item);
    myfile = await fs.promises.readFile("blogdata/" + item);
    allBlogs.push(JSON.parse(myfile));
  }

  return { props: { data: allBlogs } };
}
