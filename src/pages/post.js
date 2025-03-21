import Image from "next/image";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: {
      ...posts,
    },
  };
};

export default function page(props) {

  return (
    <div className="m-10 grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1">
      <>
        {Object.values(props)
          .slice(0, 10)
          .map((item) => (
            
            <article key={item.id} className="flex flex-col hover:shadow-lg shadow-cyan-500/50">
                <h2 clas>{item.title}</h2>
                <p>{item.body.slice(0,30)}</p>
           
              <Image src={"https://placehold.in/300x200@2x.png/dark"} width={300} height={200}/>
            </article>
          ))}
      </>
    </div>
  );
}
