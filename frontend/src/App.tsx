import { Button, Card, CardBody, CardHeader, Spinner } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FC, useState } from "react";
import Header from "./components/Header";
import SelectionBox from "./components/SelectionBox";

const App: FC = () => {
  const [country, setCountry] = useState<string | null>(null);
  const [season, setSeason] = useState<string | null>(null);

  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [recommendationsLoading, setRecommendationsLoading] = useState(false);

  const getRecommendations = () => {
    console.debug(`Getting recommendations based on ${country} and ${season}.`);

    setRecommendationsLoading(true);
    setRecommendations([]);
    fetch(`http://127.0.0.1:8080/recommend?country=${country}&season=${season}`)
      .then((r) => r.json())
      .then((d) => {
        setRecommendationsLoading(false);
        setRecommendations(d.recommendations);
      })
      .catch((e) => {
        setRecommendationsLoading(false);
      });
  };

  return (
    <main className="my-unit-4 mx-unit-4 md:mx-unit-4xl lg:mx-unit-7xl">
      <Header />

      <div className="flex flex-col md:flex-row md:items-start gap-unit-xl mt-unit-xl">
        <div className="flex flex-col gap-unit-sm md:items-start">
          <SelectionBox
            onCountryChange={setCountry}
            onSeasonChange={setSeason}
          />
          <Button
            color="secondary"
            onClick={() => {
              getRecommendations();
            }}
            isDisabled={country === null && season === null}
          >
            Generate Recommendations
          </Button>
        </div>
        <Card className="w-full md:w-auto md:flex-1">
          <CardHeader>
            <h2 className="font-bold text-lg">Recommendations</h2>
          </CardHeader>
          <CardBody className="min-h-[300px]">
            {recommendationsLoading ? (
              <motion.div
                className="flex flex-col items-center justify-center"
                initial={{
                  opacity: 0,
                  transform: "translateY(10px)",
                }}
                animate={{
                  opacity: 1,
                  transform: "translateY(0)",
                }}
              >
                <Spinner />
                <h3 className="opacity-70">Generating Recommendations...</h3>
              </motion.div>
            ) : recommendations.length > 0 ? (
              <div className="flex flex-col gap-3">
                {recommendations.map((recommendation) => {
                  return <p key={recommendation}>{recommendation}</p>;
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg font-bold opacity-50">
                  No Recommendations to Display
                </h3>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </main>
  );
};

export default App;
