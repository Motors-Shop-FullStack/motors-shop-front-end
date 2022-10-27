import { ListVehicle } from "../ListVehicle";
export function VehicleViewer({ vehicle }: any) {
  const moto_list = vehicle.filter((e: { type: string }) => e.type === "moto");
  const car_list = vehicle.filter((e: { type: string }) => e.type === "carro");
  return (
    <div>
      {moto_list.length > 0 && <ListVehicle list={moto_list} type="Moto" />}
      {car_list.length > 0 && <ListVehicle list={car_list} type="Carro" />}
    </div>
  );
}
