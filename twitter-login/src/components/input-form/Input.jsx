import "./Input.css";

export const Input = ({ details }) => {
  return (
    <div className="input-form">
      {details.map((detail, index) => (
        <a key={index} href="www.twitter.com">
          <i className={detail[0]} aria-hidden="true"></i>
          {detail[1]}
        </a>
      ))}
    </div>
  );
};
