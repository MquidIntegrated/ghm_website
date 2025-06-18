import ClientCarousel from "./ClientCarousel";

const Clients = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFE7EF] via-white to-white py-16">
      <div className="max-w-[560px] mx-auto text-center text-3xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-[#A13332] to-[#432037] bg-clip-text text-transparent">
        Over 5000 families and 100 companies enrolled nationwide
      </div>
      <ClientCarousel />
    </div>
  );
};

export default Clients;
