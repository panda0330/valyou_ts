import FundingCard from '@/Components/pricing/FundingCard';
import PriceCard from '@/Components/pricing/PriceCard';
import MainLayout from '@/Layouts/MainLayout';

export default function Pricing() {
  return (
    <MainLayout>
      <div className="flex flex-wrap items center justify-between py-10">
        <div className="w-full md:w-1/2 md:pr-14">
          <p className="text-center text-purple-400 font-semibold">
            Get early access to Valyou X tokens pre-launch!
          </p>

          <h2 className="text-5xl font-semibold my-4">
            <span className="text-pink-gradient">Valyou X</span> token
          </h2>
          <p className="font-extralight">
            To be a member of the new music industry Valyou X Ecosystem, you
            must hold ValyouX Token. Purchasing the Valyou X Token gives
            individuals and businesses the opportunity to join the Valyou X
            team. A group of early adopter supporters known as Valyou X citizens
            who help with the platform’s growth, support, and development.
            Depending on Valyou X’s success. The value of this token may
            increase or decrease
          </p>
        </div>
        <div className="w-full md:w-1/2 md:pl-14">
          <img
            src="/image/valyoux_black_logo.svg"
            alt="valyoux_black_logo.svg"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        <PriceCard
          title="standard"
          price="$10.00"
          tokenNum="5"
          desc="Non Active Team Member"
        />
        <PriceCard
          title="gold"
          price="$10,000.00"
          tokenNum="20,000"
          desc="Active Team Member"
        />
        <PriceCard
          title="platinum"
          price="$100,000.00"
          tokenNum="200,000"
          desc="Funding Member Investor"
        />
      </div>

      <h2 className="text-5xl font-bold mt-14 mb-8 text-center">
        Presale <span className="text-pink-gradient">Fund</span> & breakdown
      </h2>
      <div className="flex flex-wrap justify-center mb-5 gap-5">
        <FundingCard
          title="Software Engineering"
          content="35% of the cash will be used to continue to develop the Valyou X platform and undertake system updates, which will include budgets for team recruitment, training, and development."
        />
        <FundingCard
          title="Branding & Marketing"
          content="50% of the funds will be utilised to promote and educate the public about Valyou X and blockchain advancements through industry outlets. A significant advertising budget to assist Valyou X in gaining investor interest and attracting active users to the platform."
        />
        <FundingCard
          title="Reserve"
          content="15% will be set aside in reserve to deal with any emergency or unexpected circumstances that may arise."
        />
      </div>
    </MainLayout>
  );
}
