import "./lesson.css";
export default function LessonCard({ data }) {
  const { src, lessonName, lessonHour } = data;

  return (
    <div className="lessonContainer">
      <img src={src} alt="Lesson Image" className="lessonimg" />
      <p>
        Lesson Name: <span className="lessonVar">{lessonName}</span>
      </p>
      <p>
        Lesson Hour: <span className="lessonVar">{lessonHour}</span>
      </p>
    </div>
  );
}
