import * as fs from "fs";
// import Image from "next/image";

// import { useRouter } from "next/router";
const slug = ({ myBlog }) => {
  // const router = useRouter({ data });
  // const { slug } = router.query;
  // const [blog, setBlog] = useState(myBlog);
  // useEffect(() => {
  //   setBlog(data);
  // }, [data]);
  return (
    <section className='text-gray-600 body-font'>
      <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
        {/* <Image
          className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded'
          alt='hero'
          src='https://dummyimage.com/720x600'
        /> */}
        <div className='text-center lg:w-2/3 w-full'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            {myBlog && myBlog.title}
          </h1>
          <p className='mb-8 leading-relaxed'>{myBlog && myBlog.Content}</p>
          <div className='flex justify-center'>
            <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              Button
            </button>
            <button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
              Button
            </button>
          </div>
        </div>
      </div>
      )
    </section>
  );
};

// export async function getServerSideProps(context) {
//   const { slug } = context.query;
//   console.log("hello slug", slug);
//   // console.log(context.query);
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//   const data = await res.json();
//   console.log("Indivdual post ", data);
//   // Pass data to the page via props
//   return { props: { data } };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug: "catogory1" } },
//       { params: { slug: "thecatogory" } },
//     ],
//     fallback: true,
//   };
// }

// export async function getStaticPaths() {
//   return
//     paths: [
//       { params: { slug: "catogory1" } },
//       { params: { slug: "thecatogory" } },
//     ],
//     fallback: true, // false or 'blocking'
//   };
// }

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "catogory1" } },
      { params: { slug: "thecatogory" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
  return {
    props: {
      myBlog: JSON.parse(myBlog),
    },
  };
}

export default slug;
