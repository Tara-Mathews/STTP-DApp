const TokenSaleDashboard = () => {
  return (
    <div className="rounded-xl bg-surface p-6">
      <h2 className="text-xl font-semibold">Token Sale Dashboard</h2>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>Token Name</div>
        <div>Token Symbol</div>
        <div>User Token Balance</div>
        <div>Tokens Sold</div>
        <div>Funds Raised</div>
        <div>Remaining Allocation</div>
        <div>Status</div>
      </div>
    </div>
  );
};

export default TokenSaleDashboard;
