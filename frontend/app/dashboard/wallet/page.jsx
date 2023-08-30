"use client";
import WalletCard from "@/app/Components/WalletCard/index";

const walletPage = () => {
  const dataCard = {
    amount: "00,00",
  };

  return (
    <main className="flex min-h-screen justify-center items-start py-14">
      <WalletCard amount={dataCard.amount} />
    </main>
  );
};

export default walletPage;
