import { useState } from "react";
import MarketplaceMatchingPage from "./components/MarketplaceMatchingPage";
import Step2Page from "./components/Step2Page";
import Step3Page from "./components/Step3Page";

export default function App() {
  const [page, setPage] = useState<"step1" | "step2" | "step3">("step1");

  const navigate = (to: "step1" | "step2" | "step3") => {
    window.scrollTo(0, 0);
    setPage(to);
  };

  return (
    <div className="min-h-full w-full overflow-x-hidden">
      <div className={page === "step1" ? "" : "hidden"}>
        <MarketplaceMatchingPage onNext={() => navigate("step2")} />
      </div>
      <div className={page === "step2" ? "" : "hidden"}>
        <Step2Page onBack={() => navigate("step1")} onNext={() => navigate("step3")} />
      </div>
      <div className={page === "step3" ? "" : "hidden"}>
        <Step3Page onBack={() => navigate("step2")} />
      </div>
    </div>
  );
}
