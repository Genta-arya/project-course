import { getDatas, getSelectData } from "@/API/services";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
export default function Dinamis({ data }) {
  const router = useRouter();

  useEffect(() => {
    if (!data) {
      console.log("Data not found. Redirecting to /404");
      router.replace("/404");
    }
  }, [data, router]);

  if (!data) {
    return (
      <main
        className={`flex min-h-screen max-w-2xl m-auto flex-col items-center p-4 pt-24 ${inter.className}`}
      >
     
      </main>
    );
  }
  return (
    <main
      className={`flex min-h-screen max-w-2xl m-auto flex-col items-center p-4 pt-24 ${inter.className}`}
    >
      <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden mb-4">
        <Image
          className="relative"
          layout="fill"
          objectFit="cover"
          src={`${process.env.NEXT_PUBLIC_ASSET}${data.attributes.photo.data.attributes.url}`}
          alt={data.attributes.fullname}
        />
      </div>

      <div className="flex flex-col items-center gap-2 w-full mb-12">
        <h3 className="text-2xl font-bold">{data.attributes.fullname}</h3>
        <p className="text-lg">{data.attributes.bio}</p>
      </div>
      <div className="flex flex-col items-center gap-8 w-full">
        {data.attributes.links.data.map((value, index) => {
          const isAccountActive = value.attributes.status === "active";

          return (
            <a
              key={index}
              className={`h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[24px] p-4 hover:scale-105 transition-all cursor-pointer ${
                !isAccountActive ? "opacity-50 pointer-events-none" : ""
              }`}
              href={value.attributes.url}
              target="_blank"
              rel="noopener noreferrer"
              disabled={!isAccountActive}
            >
              {value.attributes.title}
            </a>
          );
        })}
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const accounts = await getDatas();
  const dataAccounts = await accounts.data.data;

  const paths = dataAccounts.map((value) => {
    return {
      params: { slug: value.attributes.slug },
    };
  });

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const selectedAccount = await getSelectData(params.slug);

  return {
    props: {
      data: selectedAccount.data.data[0] || null,
    },
    revalidate: 10,
  };
}
