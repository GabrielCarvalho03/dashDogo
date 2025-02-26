import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatarImageProffile from "@/assets/images/png/avata.png";
import { useUserDashboard } from "@/hook/use-dashboard/user-dashboard";

export function Menu() {
  const { selecDashboard, setSelectDashboard } = useUserDashboard();
  return (
    <div className="w-[230px] h-screen bg-black fixed flex flex-col items-center ">
      <Avatar className="w-16 h-16 mt-10">
        <AvatarImage src={avatarImageProffile.src} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <section className="w-full flex flex-col items-center gap-5 ">
        <button
          onClick={() => setSelectDashboard("customer")}
          className={` ${
            selecDashboard == "customer"
              ? "bg-bg-blue-ocean text-white"
              : "bg-transparent text-bg-blue-ocean"
          } border-0.5 border-bg-blue-ocean w-10/12 px-4 py-2 mt-10 rounded-md`}
        >
          Clientes
        </button>

        <button
          onClick={() => setSelectDashboard("challanger")}
          className={` ${
            selecDashboard == "challanger"
              ? "bg-bg-blue-ocean text-white"
              : "bg-transparent text-bg-blue-ocean"
          } border-0.5 border-bg-blue-ocean w-10/12 px-4 py-2  rounded-md`}
        >
          Desafios
        </button>
      </section>
    </div>
  );
}
