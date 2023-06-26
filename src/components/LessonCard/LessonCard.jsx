import "./lesson.css";
export default function LessonCard({ data }) {
  const { src, lessonName, lessonHour } = data;

  return (
    <div className="lessonContainer">
      <img src={src} alt="Lesson Image" className="lessonimg" />
      <p>
        Lesson Name: <sapan className="lessonVar">{lessonName}</sapan>
      </p>
      <p>
        Lesson Hour: <sapan className="lessonVar">{lessonHour}</sapan>
      </p>
    </div>
  );
}
