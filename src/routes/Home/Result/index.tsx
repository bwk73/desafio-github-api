import ResultCard from "../../../components/ResultCard";
import SearchCard from "../../../components/SearchCard";

export default function Result() {
  return (
    <main>
      <section className="ml-90">
        <div>
          <SearchCard />
        </div>
      </section>
      <section className="ml-90">
        <div>
          <ResultCard />
        </div>
      </section>
    </main>
  );
}
