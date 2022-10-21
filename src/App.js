import "./styles.css";
import "./mvp.css";
import Valorant from "./Valorant.js";


export default function App({valBundles}) {
  return (
    <>
      {valBundles.map((v, k) => (
        <Valorant key={k} displayName={v.displayName} icon={v.displayIcon} />
      ))}
    </>
  );
}



