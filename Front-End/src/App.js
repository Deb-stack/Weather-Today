import CurrentLocation from "./services/GetWeather";

const displaySize = {
  width: "80%",
  height: "5em",
  border: "3px solid skyblue",
  backgroundColor: "#000000a1",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#fff",
  fontWeight: "90px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function App() {
  const isDesktop = window.innerWidth >= 1250;
  return (
    <>
      {isDesktop ? (
        <CurrentLocation />
      ) : (
        <div style={displaySize}>
          <h5>
            Web application is not compatible with current Screen Size
            <br />
            Please use a Desktop to view the Page
          </h5>
        </div>
      )}
    </>
  );
}
