import Header from "./components/Header/Header";
import LessonCard from "./components/LessonCard/LessonCard";
import "./index.css";
import htmlimg from "./assets/html.png";
import cssimg from "./assets/css.png";
import jsimg from "./assets/js.png";
import reactimg from "./assets/react.png";
import bsimg from "./assets/bootstrap.jpg";
import muiimg from "./assets/mui.png";
function App() {
  const lessonData = [
    {
      src: htmlimg,
      lessonName: "HTML",
      lessonHour: "10:00 am",
    },
    {
      src: cssimg,
      lessonName: "CSS",
      lessonHour: "11:15 am",
    },
    {
      src: jsimg,
      lessonName: "JavaScript",
      lessonHour: "13:00 pm",
    },
    {
      src: reactimg,
      lessonName: "React",
      lessonHour: "14:15 pm",
    },
    {
      src: bsimg,
      lessonName: "Bootstrap",
      lessonHour: "15:15 pm",
    },
    {
      src: muiimg,
      lessonName: "MUI",
      lessonHour: "16:15 pm",
    },
  ];
  return (
    <div>
      <Header />
      <main className="main">
        <h1 className="headrm">Lesson Remainder</h1>
        <section className="lessons">
          {lessonData.map((item, index) => (
            <LessonCard key={index} data={item} />
          ))}
        </section>
      </main>
    </div>
  );
}
export default App;
