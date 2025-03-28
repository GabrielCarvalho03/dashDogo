"use client";

import ShareIcon from "@/assets/icons/share-icon";
import { useEffect } from "react";

import { useModalSendMessage } from "@/hook/use-modal-send-message/use-modal-send-message";
import { useUser } from "@/hook/useUser/use-user";
import { useRouter } from "next/navigation";
import { UseUserDetails } from "@/hook/use-user-details/use-user-details";
import { UserPlan } from "../user-plan/user-plan";
import { Loader } from "../Loader/loader";
import { Filter } from "../filter/filter";
import moment from "moment";
import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { userObject } from "@/hook/useUser/types";

moment().locale("pt-BR");

export function Customers() {
  const router = useRouter();
  const { customers, loadingGetUser, handleGetUser, handleOrderBy } = useUser();
  const { handleChangeUserObj } = UseUserDetails();

  useEffect(() => {
    if (!customers.length) {
      handleGetUser();
    }
  }, []);

  if (loadingGetUser) {
    return <Loader />;
  }

  const firstWeekStart = moment().startOf("month").startOf("week"); // Começo da primeira semana
  const firstWeekEnd = firstWeekStart.clone().add(6, "days").endOf("day"); // Fim da primeira semana

  const secondWeekStart = firstWeekEnd.clone().add(1, "days"); // Começo da segunda semana
  const secondWeekEnd = secondWeekStart.clone().add(6, "days").endOf("day"); // Fim da segunda semana

  const thirdWeekStart = secondWeekEnd.clone().add(1, "days"); // Começo da terceira semana
  const thirdWeekEnd = thirdWeekStart.clone().add(6, "days").endOf("day"); // Fim da terceira semana

  const fourthWeekStart = thirdWeekEnd.clone().add(1, "days"); // Começo da quarta semana
  const fourthWeekEnd = fourthWeekStart.clone().add(6, "days").endOf("day"); // Fim da quarta semana

  const filterUsersByWeek = (
    customers: userObject[],
    start: moment.Moment,
    end: moment.Moment
  ) => {
    return customers.filter((customers) => {
      const createdAt = moment(customers.createdAt);
      return createdAt.isBetween(start, end, null, "[]"); // Verifica se está entre o intervalo
    });
  };

  const weekUsers = [
    filterUsersByWeek(customers, firstWeekStart, firstWeekEnd), // Primeira semana
    filterUsersByWeek(customers, secondWeekStart, secondWeekEnd), // Segunda semana
    filterUsersByWeek(customers, thirdWeekStart, thirdWeekEnd), // Terceira semana
    filterUsersByWeek(customers, fourthWeekStart, fourthWeekEnd), // Quarta semana
  ];

  console.log("Quantidade de usuários na Quarta Semana:", weekUsers[3].length);

  const chartData = [
    {
      Semana: "Semana 1",
      usuarios: filterUsersByWeek(customers, firstWeekStart, firstWeekEnd)
        .length,
      fill: "#3a86ff",
    },
    {
      Semana: "Semana 2",
      usuarios: filterUsersByWeek(customers, secondWeekStart, secondWeekEnd)
        .length,
      fill: "#1b263b",
    },
    {
      Semana: "Semana 3",
      usuarios: filterUsersByWeek(customers, thirdWeekStart, thirdWeekEnd)
        .length,
      fill: "#003049",
    },
    {
      Semana: "Semana 4",
      usuarios: filterUsersByWeek(customers, fourthWeekStart, fourthWeekEnd)
        .length,
      fill: "#90e0ef",
    },
  ];

  const chartConfig = {
    Semana: {
      label: "visitors",
      color: "#4F46E5",
    },
    safari: {
      label: "Safari",
      color: "#ff006e",
    },
    firefox: {
      label: "Firefox",
      color: "hsl(var(--chart-3))",
    },
    edge: {
      label: "Edge",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig;

  const getUsersThisMonth = (customers: userObject[]) => {
    const currentMonth = moment().month(); // Mês atual (0-11)
    const currentYear = moment().year(); // Ano atual

    return customers.filter((customer) => {
      const customerMonth = moment(customer.createdAt).month();
      const customerYear = moment(customer.createdAt).year();
      return customerMonth === currentMonth && customerYear === currentYear;
    });
  };

  return (
    <main className="w-full h-full bg-bg-primary overflow-y-auto pb-10 ">
      <div className="mt-10 pl-10">
        <h1 className="text-white text-2xl font-madefor font-bold">
          Bem-vindo ao seu <span className="text-bg-blue-ocean">dashboard</span>
        </h1>
      </div>

      <div className="min-h-32 w-full  ">
        <ChartContainer
          config={chartConfig}
          className=" max-h-[250px] aspect-square mx-auto"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="usuarios"
              nameKey="Semana"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 30}
                          className="fill-white  font-bold text-white"
                        >
                          {moment().format("MM/YYYY")}
                        </tspan>

                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-white text-3xl font-bold text-white"
                        >
                          {getUsersThisMonth(customers).length}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          usuários
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>

      <div className="w-full px-10 flex justify-between items-center">
        <h1 className="mt-10  text-2xl font-madefor  text-white">
          Clientes ({customers.length})
        </h1>
      </div>

      <section className="w-[95%] max-h-[650px]  overflow-y-auto  ml-10 mt-10  border-0.5 rounded-lg border-bg-gray-ligth ">
        <div className="px-6 py-2 flex justify-between">
          <Filter
            onChange={(e) => {
              //@ts-ignore
              handleOrderBy({ order: e.target.value });
            }}
            title="Ordernar por"
            options={["Mais recentes", "Mais antigos"]}
            defaultValue="Mais recentes"
          />
        </div>

        <div className="p-6 pb-10 max-h-[600px]">
          <table className="w-full bg-bg-primary cursor-pointer rounded-lg overflow-hidden border-separate border-spacing-y-3">
            <thead>
              <tr className="">
                <th className="text-left px-4 text-gray-400 font-light">
                  Nome
                </th>
                <th className="text-left px-4 text-gray-400 font-light">
                  Número
                </th>
                <th className="text-left px-4 text-gray-400 font-light">
                  Cadastro
                </th>
                <th className="text-left px-4 text-gray-400 font-light">
                  Plano
                </th>
                <th className="text-left px-4 text-gray-400 font-light">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr
                  key={index}
                  className="h-16 bg-bg-gray-ligth hover:bg-[#252525] transition-colors"
                  onClick={() => handleChangeUserObj(customer, router)}
                >
                  <td className="p-4 text-white rounded-l-lg ">
                    {customer.name}
                  </td>
                  <td className="p-4 text-white">{customer.phone}</td>
                  <td className="p-4 text-white">
                    {moment(customer.createdAt).format("DD/MM/YYYY")}
                  </td>
                  <td className="p-4">
                    <UserPlan plan={customer.plan} />
                  </td>
                  <td className="p-4 text-white rounded-r-lg ">
                    <div>
                      <button
                        className="text-blue-500 hover:underline text-sm flex items-center gap-2"
                        onClick={() =>
                          window.open(`https://wa.me/${customer.phone}`)
                        }
                      >
                        Enviar mensagem
                        <ShareIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
