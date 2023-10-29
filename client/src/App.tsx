import "./App.css";
import { useCallback, useState } from "react";
import { request } from "./api";
import { MutatingDots } from "react-loader-spinner";

function App() {
  const [result, setResult] = useState<null | string>();
  const [isLoading, setIsLoading] = useState(false);

  const makeApiCall = useCallback(async (url: string) => {
    try {
      setIsLoading(true);
      const data = await request(url);
      setResult(data);
    } catch (error) {
      if (error instanceof Error) {
        setResult(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 50 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        <button onClick={() => makeApiCall("")}>/</button>
        <button onClick={() => makeApiCall("dateAndTime")}>/dateAndTime</button>
        <button onClick={() => makeApiCall("processId")}>/processId</button>
        <button onClick={() => makeApiCall("hostName")}>/hostName</button>
        <button onClick={() => makeApiCall("hostPlatform")}>/hostPlatform</button>
        <button onClick={() => makeApiCall("hostProcessor")}>/hostProcessor</button>
        <button onClick={() => makeApiCall("hostMemory")}>/hostMemory</button>
        <button onClick={() => makeApiCall("hostUptime")}>/hostUptime</button>
      </div>
      <div
        style={{
          borderRadius: 10,
          backgroundColor: "black",
          width: 800,
          height: 600,
          color: "white",
          padding: 10,
          fontSize: 24,
          textAlign: "start",
        }}
      >
        {isLoading ? (
          <div
            style={{
              marginTop: 250,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MutatingDots
              height="100"
              width="100"
              color="#4fa94d"
              secondaryColor="#4fa94d"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          result
        )}
      </div>
    </div>
  );
}

export default App;
