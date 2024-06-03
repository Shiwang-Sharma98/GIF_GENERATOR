import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return(
    <div className="w-full h-screen flex flex-col background  overflow-x-hidden">
      <h1 className="bg-white rounded-lg w-10/12 text-center mt-10 mx-auto px-10 py-2 text-3xl font-bold">RANDOM GIFS</h1>
      <div className="flex flex-col justify-center items-center mt-9">
        <Random></Random>
        <Tag></Tag>
      </div>

    </div>
  );
}
