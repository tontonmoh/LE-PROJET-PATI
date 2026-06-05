import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { getBook } from "../data/books";
import { QUIZZES } from "../data/quizzes";
import QuizRunner from "../components/QuizRunner";

export default function BookQuiz() {
  const { id } = useParams();
  const book = getBook(id || "");
  const questions = QUIZZES[id || ""];

  return (
    <section className="bg-[#FFF6E7] min-h-[70vh]">
      <div className="max-w-2xl mx-auto px-6 pt-8">
        <Link to={book ? `/livre/${book.slug}` : "/"} className="inline-flex items-center gap-1.5 text-[#0F6E56] font-display font-semibold hover:underline">
          <ArrowLeft size={18} /> {book ? book.title : "Retour"}
        </Link>
      </div>
      {questions && questions.length ? (
        <QuizRunner questions={questions} />
      ) : (
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 font-display font-semibold text-[#0F6E56] bg-[#FFC93C]/30 px-4 py-1.5 rounded-full mb-5"><Sparkles size={16} /> Bientôt</div>
          <h1 className="text-2xl text-[#0D2B1A] mb-3">Le quiz de ce livre arrive bientôt&nbsp;!</h1>
          <Link to="/" className="btn-kid bg-[#0F6E56] text-white">Accueil</Link>
        </div>
      )}
    </section>
  );
}
