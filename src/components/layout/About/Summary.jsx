import { useLanguage } from "../../common/Language/LanguageContext";

const Summary = () => {
  const { isEnglish } = useLanguage();
  return (
    <>
      <div className="w-full px-3">
        <h2 className="mb-5 text-3xl font-semibold text-center sm:text-4xl ">
          {isEnglish ? "A Little About Me" : "Sedikit Cerita Tentang Saya"}
        </h2>
        <div className="space-y-5">
          {isEnglish ? (
            <p className="text-base text-center sm:px-4">
              Hey there! I'm a Web Developer and an Information Technology
              graduate from Politeknik Negeri Nusa Utara, with a genuine
              interest in technology, especially web development. I enjoy
              exploring new things, experimenting with different technologies,
              and turning ideas into something useful through code. For me,
              learning isn't just about mastering programming languages; it's
              also about understanding problems and figuring out how to solve
              them. There's actually an anime character that represents a
              mindset I really admire:
              <p className="font-semibold">Mahoraga from Jujutsu Kaisen.</p> Not
              because of its strength, but because of its ability to
              continuously adapt to different situations. I find that idea
              fascinating because technology never stops evolving, and neither
              should we as developers. Currently, I'm focused on improving my
              web development skills, strengthening my programming fundamentals,
              and exploring new technologies through hands-on projects.
              <p className="font-semibold ">
                Still learning and still adapting like{" "}
                <strong className="font-bold">MAHORAGA!</strong>
              </p>
            </p>
          ) : (
            <p className="text-base text-center sm:px-4">
              Halo! Saya seorang Web Developer dan lulusan Teknologi Informatika
              dari Politeknik Negeri Nusa Utara yang memiliki ketertarikan besar
              terhadap teknologi, khususnya pengembangan web. Saya senang
              mempelajari hal-hal baru, bereksperimen dengan berbagai teknologi,
              dan mengubah ide menjadi sesuatu yang bermanfaat melalui kode.
              Bagi saya, belajar bukan hanya tentang menguasai bahasa
              pemrograman, tetapi juga tentang memahami permasalahan dan mencari
              cara untuk menyelesaikannya. Ada satu karakter anime yang
              menggambarkan pola pikir yang sangat saya kagumi:
              <p className="font-semibold">Mahoraga dari Jujutsu Kaisen.</p>
              Bukan karena kekuatannya, melainkan karena kemampuannya untuk
              terus beradaptasi dengan berbagai situasi. Saya tertarik dengan
              filosofi tersebut karena teknologi tidak pernah berhenti
              berkembang, begitu pula kita sebagai developer. Saat ini, saya
              berfokus untuk meningkatkan kemampuan web development, memperkuat
              fundamental pemrograman, serta mengeksplorasi berbagai teknologi
              baru melalui proyek-proyek langsung.
              <p className="font-semibold">
                Terus belajar dan terus beradaptasi seperti{" "}
                <strong className="font-bold">MAHORAGA!</strong>
              </p>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Summary;
