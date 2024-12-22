import loader from "@/assets/gif/burger-loader.gif";
import Image from "next/image";
import "@/app/globals.css";

function MealsLoading() {
  return (
    <div className="loader_container">
      <div>
        <Image src={loader} className="loader" />
      </div>
    </div>
  );
}
export default MealsLoading;
