import { useNavigate } from "react-router-dom";
export default function EventsCard({ data }) {
  const navigate = useNavigate();
  const handleClick = (eventsId) => {
    navigate(`/events/${eventsId}`, { state: { event: data } });
  };
  const day = new Date(data.event_date);
  return (
    <div
      className="col-sm-3 m-2 events-card"
      style={{ cursor: "pointer" }}
      onClick={() => handleClick(data.id)}
    >
      <div className="card-img-top" style={{ overflow: "hidden" }}>
        <img
          src={process.env.PUBLIC_URL + "/events/events.svg"}
          alt="profile"
        />
      </div>
      <div className="card-body">
        <div style={{ fontWeight: "bold" }}>{data.event_title}</div>
        <div className="title text-primary" style={{ fontWeight: 900 }}>
          {`${day.getDate()} ${day.toLocaleString("default", {
            month: "long",
          })}, ${day.getFullYear()}`}
        </div>
      </div>
    </div>
  );
}
