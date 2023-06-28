import "./lesson.css";
export default function LessonCard({ data: { src, lessonName, lessonHour } }) {
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
