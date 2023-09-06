"use client";
import WalletCard from "@/app/Components/DashboadComp/WalletCard/index";

const walletPage = () => {
  const dataCard = {
    amount: "00,00",
  };

  return (
    // <div className="flex min-h-screen justify-center items-start py-14">
      <WalletCard amount={dataCard.amount} />
    // </div>
  );
};

export default walletPage;
