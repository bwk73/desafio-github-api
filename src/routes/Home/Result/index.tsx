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
          {
            FormData
            ? <ResultCard information={{
                profileImg: "https://avatars.githubusercontent.com/u/13897257?v=4",
                githubUrl: "https://api.github.com/users/acenelio",
                followers: 10136,
                location: "Brazil",
                name: "Nelio Alves"
              }} />
            :<div className="ntf-container">
              <h2>Erro ao buscar usuário</h2>
            </div>
          }
      </section>
    </main>
  );
}
