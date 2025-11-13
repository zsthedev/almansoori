import { discoverCards } from "../data/discover";
import DiscoverCard from "./DiscoverCard";

const Discover = () => {
  return (
    <section className="w-full section-padding">
      <div className="flex flex-col lg:flex-row lg:items-center gap-8">
        <div className="flex flex-col w-full lg:w-1/2">
          <div>
            <h2 className="section-heading">
              Discover What Makes Us Different
            </h2>
            <p className="text-brand-primary-950">
              By adopting modern medical technology, we ensure high-quality
              care, accurate assessments, and better patient experiences across
              all healthcare services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {discoverCards.map((c, index) => (
              <DiscoverCard
                key={index}
                icon={c.icon}
                title={c.title}
                desc={c.description}
                bgColor={c.bgColor}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden max-h-[720px]">
          <img
            src="/images/doctor_in_yellow.png"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Discover;
