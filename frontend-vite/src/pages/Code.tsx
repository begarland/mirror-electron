import ReactCodepen from "ts-react-codepen-embed";

const Code = () => {
  return (
    <div className="h-screen w-screen">
      <ReactCodepen
        height={window.innerHeight}
        hash="pyBNzX"
        user="P1N2O"
        loader={() => <div>Loading...</div>}
      />
    </div>
  );
};

export default Code;
