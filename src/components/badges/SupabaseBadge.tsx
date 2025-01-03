import supabase from "../../assets/icons/supabase.svg";

const SupabaseBadge = () => {
  return (
    <div className="inline-flex py-1 px-1 pl-2 mb-2 items-center rounded-full bg-[#136643]">
      <img src={supabase} alt="Supabase icon" className="w-4 h-4" />
      <span className="text-white text-sm">Supabase</span>
    </div>
  );
};

export default SupabaseBadge;
