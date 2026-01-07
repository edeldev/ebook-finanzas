import {
  Authority,
  Benefits,
  Faq,
  IncludesEbook,
  Main,
  Price,
  ProblemSection,
  SolutionSection,
  Testimonial,
  WhoIsItFor,
} from "./components";

function App() {
  return (
    <>
      <Main />
      <ProblemSection />
      <SolutionSection />
      <IncludesEbook />
      <WhoIsItFor />
      <Benefits />
      <Authority />
      <Testimonial />
      <Price />
      <Faq />
    </>
  );
}

export default App;
