import { Button } from "@/components/ui/button";
import { features } from "@/constants/features";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="wrapper section-padding min-h-[calc(100vh-4rem)]">
      <div className="flex justify-center">
        <div className="text-center space-y-3">
          <h2 className="heading2">Effortless Issue Tracking</h2>
          <p className="paragraph">
            Streamline your project management and never lose sight of important
            tasks again.
          </p>
          <div>
            <Link href="/user/sign-in" className="btn btn-primary">
              <Button variant="default">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="my-10">
        <h1 className="heading2">Features</h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col gap-3 rounded-2xl p-4 bg-card"
            >
              <div>
                <h2 className="heading2">{feature.title}</h2>
                <p className="paragraph">{feature.description}</p>
                <div className="mt-2">
                  {feature.status === "Completed" ? (
                    <span className="px-2 py-1 rounded-2xl bg-green-500 text-white text-xs">
                      {feature.status}
                    </span>
                  ) : (
                    <span className="px-2 py-1 rounded-2xl bg-yellow-500 text-white text-xs">
                      {feature.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
