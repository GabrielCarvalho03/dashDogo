type UserPlanProps = {
  plan: string;
};

export const UserPlan = ({ plan }: UserPlanProps) => {
  return (
    <span
      className={`
          px-3 py-1 rounded-full text-sm
          ${plan === "daily" ? "bg-blue-500/20 text-blue-500" : ""}
          ${plan === "free" ? "bg-orange-500/20 text-orange-500" : ""}
          ${plan === "monthly" ? "bg-purple-500/20 text-purple-500" : ""}
          ${plan === "weekly" ? "bg-gray-500 text-gray-300" : ""}
        `}
    >
      {plan}
    </span>
  );
};
