import Link from "next/link";

type Athlete = {
  position: number;
  photo: string;
  name: string;
  academy: string;
  points: string;
  slug: string;
};

const maleAthletes: Athlete[] = [
  { position: 1, photo: "https://api.ibjjfdb.com/Athletes/134127/RankingPhoto", name: "Erich Munis dos Santos", academy: "Soldiers Jiu-Jitsu", points: "1100.0", slug: "/athletes/erich-santos" },
  { position: 2, photo: "https://api.ibjjfdb.com/Athletes/75845/RankingPhoto", name: "Tainan Dalpra Costa", academy: "AOJ", points: "666", slug: "/athletes/tainan-costa" },
  { position: 3, photo: "https://api.ibjjfdb.com/Athletes/82191/RankingPhoto", name: "Diego Oliveira Batista", academy: "AOJ", points: "654", slug: "/athletes/diego-batista" },
  { position: 4, photo: "https://api.ibjjfdb.com/Athletes/243940/RankingPhoto", name: "Francisco Papasidero", academy: "AOJ", points: "651.5", slug: "/athletes/francisco-papasidero" },
  { position: 5, photo: "https://api.ibjjfdb.com/Athletes/132144/RankingPhoto", name: "Vinicius Liberati", academy: "Soldiers Jiu-Jitsu", points: "558.5", slug: "/athletes/vinicius-liberati" },
];

const femaleAthletes: Athlete[] = [
  { position: 1, photo: "https://api.ibjjfdb.com/Athletes/62925/RankingPhoto", name: "Gabrieli Pessanha de Souza Marinho", academy: "Infight Jiu-Jitsu", points: "1933.5", slug: "/athletes/gabrieli-marinho" },
  { position: 2, photo: "https://api.ibjjfdb.com/Athletes/140386/RankingPhoto", name: "Larissa Dias de Almeida", academy: "Elementum Jiu-Jitsu", points: "1051.0", slug: "/athletes/larissa-almeida" },
  { position: 3, photo: "https://api.ibjjfdb.com/Athletes/326865/RankingPhoto", name: "Sarah C. Firme Galvao", academy: "Atos Jiu Jitsu USA", points: "868.5", slug: "/athletes/sarah-galvao" },
  { position: 4, photo: "https://api.ibjjfdb.com/Athletes/30307/RankingPhoto", name: "Mayssa Caldas Pereira Bastos", academy: "AOJ", points: "667", slug: "/athletes/mayssa-bastos" },
  { position: 5, photo: "https://api.ibjjfdb.com/Athletes/196706/RankingPhoto", name: "Janaina Maia de Menezes", academy: "Alliance USA", points: "555.0", slug: "/athletes/janaina-menezes" },
];

function RankingTable({ athletes, gender }: { athletes: Athlete[]; gender: string }) {
  return (
    <>
      <div className="ranking-name flex items-center justify-center gap-2 pt-8 pb-4">
        <span className="font-bold text-white text-lg">{gender} Adult Black</span>
        <span className="font-normal text-white/70">Gi</span>
      </div>
      <div className="ranking-list">
        <table className="w-full">
          <tbody>
            {athletes.map((athlete) => (
              <tr key={athlete.slug} className="border-b border-white/10">
                <td className="text-white font-bold text-center py-3 w-12">{athlete.position}</td>
                <td className="w-12 py-3">
                  <img
                    src={athlete.photo}
                    alt={athlete.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="py-3">
                  <div className="text-white font-semibold text-sm">
                    <Link href={athlete.slug} className="text-white no-underline hover:underline">
                      {athlete.name}
                    </Link>
                  </div>
                  <div className="text-white/60 text-xs">{athlete.academy}</div>
                </td>
                <td className="text-white font-bold text-right py-3 w-20">{athlete.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center pt-4 pb-8">
        <Link
          href={`/2026-athletes-ranking?filters%5Bage_division%5D=adult&filters%5Bbelt%5D=black&filters%5Bgender%5D=${gender === "Male" ? "male" : "female"}&filters%5Blimit%5D=5&filters%5Bs%5D=ranking-geral-gi`}
          className="inline-block px-6 py-2 border-2 border-white text-white uppercase text-xs tracking-wider font-medium no-underline hover:bg-white hover:text-[#07162e] transition-all duration-300"
        >
          See full ranking
        </Link>
      </div>
    </>
  );
}

export default function Rankings() {
  return (
    <section
      className="w-full bg-cover bg-center min-h-[200px]"
      id="rankings"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1555597673-b21d5c9359b2?w=1920&q=80)",
        backgroundColor: "#07162e",
      }}
    >
      <div className="home-section py-8">
        <div className="flex items-center justify-center h-[100px] lg:h-[140px] mb-[40px] lg:mb-[60px]">
          <h3 className="text-white text-2xl lg:text-3xl font-bold uppercase text-center">
            2026 - 2027 LJJL Ranking
          </h3>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:grid grid-cols-2 gap-8 container-ljjl">
          <RankingTable athletes={maleAthletes} gender="Male" />
          <RankingTable athletes={femaleAthletes} gender="Female" />
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden container-ljjl">
          <RankingTable athletes={maleAthletes} gender="Male" />
          <RankingTable athletes={femaleAthletes} gender="Female" />
        </div>
      </div>
    </section>
  );
}
